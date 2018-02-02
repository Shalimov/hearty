import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		query DictionaryOverviewQuery($input: TermQueryInput) {
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
		options: ({ queryInput }) => ({
			variables: {
				input: queryInput,
			},
		}),

		props: ({ data }) => ({
			data,
			loadMore(input) {
				data.fetchMore({
					variables: { input },
					updateQuery: (prevResult, { fetchMoreResult }) => fetchMoreResult,
				})
			},
		}),
	})
)
