import { compose, withProps, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import OverviewAnalysesComponent from './component'
import columns from './columns.descriptor'
import Controls from './components/controls'

const DEFAULT_LIMIT = 15

export default compose(
	graphql(gql`
		query AnalysisOverviewQuery($input: AnalysisQueryInput) {
			analyses(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					name
					pattern
					basic
				}
			}
		}
	`, {
		options: {
			variables: {
				input: {
					limit: DEFAULT_LIMIT,
					skip: 0,
				},
			},
		},
	}),
	withHandlers({
		onRemove: () => () => {

		},

		onFetchData: ({ data }) => (state) => {
			if (data.loading) {
				return
			}

			data.fetchMore({
				variables: {
					input: {
						limit: DEFAULT_LIMIT,
						skip: state.page * DEFAULT_LIMIT,
					},
				},
				updateQuery: (prevResult, { fetchMoreResult }) => fetchMoreResult,
			})
		},
	}),
	withProps(({ onRemove }) => {
		const propsWrapper = withProps({ onRemove })

		return {
			columns: columns(propsWrapper(Controls)),
		}
	})
)(OverviewAnalysesComponent)
