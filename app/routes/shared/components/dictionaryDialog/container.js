import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withFormModel } from 'shared/hocs'

import DictionaryDialogComponent from './component'
import searchModel from './search.model'

const getOptions = fp.flow(
	fp.get('content'),
	fp.flatMap(({ term, subTerms }) => fp.map(subTerm => ({
		label: `${term} - ${subTerm.term}`,
		value: subTerm.term,
	}), subTerms))
)

const getTermQueryInput = term => ({
	skip: 0,
	limit: 20,
	term,
})

export default compose(
	inject('applicationStateStore'),
	withFormModel(searchModel, { spreadFields: true }),
	graphql(gql`
		query RetrieveFromDictionary($input: TermQueryInput) {
			terms(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					term
					subTerms {
						term
					}
				}
			}
		}
	`, {
		options: {
			variables: {
				input: getTermQueryInput(),
			},
		},
	}),
	withHandlers({
		loadOptions: ({ data }) => fp.debounce(500, async (search, callback) => {
			const { data: { terms } } = await data.refetch({
				input: getTermQueryInput(search),
			})

			callback(null, {
				options: getOptions(terms),
			})
		}),

		onChange: ({ applicationStateStore }) => ({ target }) => {
			const { value: selectedTerm } = target.value
			applicationStateStore.uiState.setDictionaryDialogStateClose(selectedTerm)
		},

		onRequestClose: ({ applicationStateStore }) => () => {
			applicationStateStore.uiState.setDictionaryDialogStateClose(null)
		},
	})
)(DictionaryDialogComponent)
