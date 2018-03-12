import { compose, withProps, withHandlers, defaultProps, withState } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import OverviewAnalysesComponent from './component'
import columns from './columns.descriptor'
import Controls from './components/controls'

const DEFAULT_PAGE_SIZE = 15

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withState('queryInput', 'setQueryInput', ({ pageSize }) => ({
		limit: pageSize,
		skip: 0,
	})),
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
	}),
	graphql(gql`
		mutation RemoveAnalysisMutation($_id: ID!) {
			removeAnalysis(_id: $_id) {
				_id
			}
		}
	`, { name: 'removeAnalysisMutation' }),
	withHandlers({
		onRemove: ({ removeAnalysisMutation }) =>
			tryAsync(async (_id) => {
				removeAnalysisMutation({
					variables: { _id },
					refetchQueries: ['AnalysisOverviewQuery'],
				})
			}),

		onFetchData: ({ data, pageSize, setQueryInput, loadMore }) => (state) => {
			if (data.loading) {
				return
			}

			const input = {
				limit: pageSize,
				skip: state.page * pageSize,
			}

			setQueryInput(input)
			loadMore(input)
		},
	}),
	withProps(({ onRemove }) => {
		const propsWrapper = withProps({ onRemove })

		return {
			columns: columns(propsWrapper(Controls)),
		}
	})
)(OverviewAnalysesComponent)
