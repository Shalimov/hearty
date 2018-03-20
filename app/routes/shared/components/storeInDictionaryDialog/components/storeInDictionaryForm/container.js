import { graphql } from 'react-apollo'
import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'
import gql from 'graphql-tag'

import StoreInDictionaryFormComponent from './component'
import termModel, { mapping } from './term.model'


const getOptions = fp.flow(
	fp.prop('content'),
	fp.map(({ _id, term }) => ({ value: _id, label: term }))
)

const getTermQueryInput = term => ({
	skip: 0,
	limit: 20,
	term,
})

export default compose(
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
	withFormModel(termModel, { spreadFields: true }),
	withHandlers({
		loadOptions: ({ data }) => async (search, callback) => {
			const { data: { terms } } = await data.refetch({
				input: getTermQueryInput(search),
			})

			callback(null, {
				options: getOptions(terms),
			})
		},

		onInternalSubmit: ({ onSubmit }) => (formData) => {
			const formattedData = mapper(formData, mapping)

			if (fp.isObject(formattedData.term)) {
				const { value: _id, label: term } = formattedData.term

				onSubmit({
					_id,
					term,
					subterm: formData.subterm,
				})
			}

			onSubmit(formattedData)
		},
	}),
)(StoreInDictionaryFormComponent)
