import { compose, withProps, withHandlers, defaultProps, withState } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import OverviewEpicrisisComponent from './component'
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
		query EpicrisisOverviewQuery($input: EpicrisisQueryInput) {
			epicrises(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					epicrisisNo
					patient {
						fullname
						arrivalAt
						departureAt
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
	}),
	graphql(gql`
		mutation RemoveEpicrisisMutation($_id: ID!) {
			removeEpicrisis(_id: $_id) {
				_id
			}
		}
	`, {
		name: 'removeEpicrisisMutation',
	}),
	graphql(gql`
		mutation PrintDocTemplate($_id: ID!, $epicrisisTemplate: String!) {
			printEpicrisis(_id: $_id, epicrisisTemplate: $epicrisisTemplate)
		}
	`, {
		name: 'printEpicrisisMutation',
	}),
	withHandlers({
		onPrint: ({ printEpicrisisMutation }) =>
			tryAsync(async ({ _id, templateName }) => {
				await printEpicrisisMutation({
					variables: {
						_id,
						epicrisisTemplate: templateName,
					},
				})
			}),

		onRemove: ({ removeEpicrisisMutation }) =>
			tryAsync(async (_id) => {
				removeEpicrisisMutation({
					variables: { _id },
					refetchQueries: ['EpicrisisOverviewQuery'],
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
	withProps(({ onRemove, onPrint }) => {
		const propsWrapper = withProps({ onRemove, onPrint })

		return {
			columns: columns(propsWrapper(Controls)),
		}
	})
)(OverviewEpicrisisComponent)
