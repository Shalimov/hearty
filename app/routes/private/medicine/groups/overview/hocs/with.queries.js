import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		query MedicineGroupOverviewQuery($input: MedicineGroupQueryInput) {
			medicineGroups(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					groupName
					priority
					listOfMedicaments {
						name
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
