import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		query DictionaryOverview($input: TermQueryInput) {
			terms(input: $input) {
				totalCount
				totalPages
				pageSize
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
		options: ({ pageSize }) => ({
			variables: {
				input: {
					limit: pageSize,
					skip: 0,
				},
			},
		}),
	})
)
