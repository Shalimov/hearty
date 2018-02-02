import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

const OverviewQuery = gql`
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
`

export default compose(
	graphql(OverviewQuery, {
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
export { OverviewQuery }
