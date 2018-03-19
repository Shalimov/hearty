import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withFormModel } from 'shared/hocs'

import DictionaryDialogComponent from './component'
import searchModel from './search.model'

const getTermQueryInput = term => ({
	skip: 0,
	limit: 20,
	term,
})
const DELAY = 500

// TODO: should be improved
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
						tags
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
		onTermSearch: ({ data }) => fp.debounce(DELAY, async (value, callback) => {

			const { data: { terms } } = await data.refetch({
				input: getTermQueryInput(value),
			})

			callback(fp.prop('content', terms))
		}),

		onSubtermSearch: () => (value, activeItem, callback) => {
			callback(fp.flow(
				fp.prop('subTerms'),
				fp.filter(fp.flow(
					fp.prop('term'),
					fp.includes(value),
				))
			)(activeItem))
		},

		onChange: ({ applicationStateStore }) => ({ term }) => {
			// const { value: selectedTerm } = target.value
			applicationStateStore.uiState.setDictionaryDialogStateClose(term)
		},

		onRequestClose: ({ applicationStateStore }) => () => {
			applicationStateStore.uiState.setDictionaryDialogStateClose(null)
		},
	})
)(DictionaryDialogComponent)
