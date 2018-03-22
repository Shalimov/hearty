import fp from 'lodash/fp'
import {
	compose,
	withProps,
	withHandlers,
	defaultProps,
	withStateHandlers,
} from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import OverviewEpicrisisComponent from './component'
import columns from './columns.descriptor'
import Controls from './components/controls'

const DEFAULT_PAGE_SIZE = 15
const SEARCH_DELAY = 600
const createSearchObject = (search = '') => [{ id: 'all', value: search }]

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withStateHandlers(({ pageSize }) => ({
		queryInput: {
			limit: pageSize,
			skip: 0,
			term: null,
		},
		filterValue: createSearchObject(),
		searchValue: '',
	}), {
		setQueryInput: () => ({ limit, skip, term }) => ({ limit, skip, term }),
		setFilterValue: () => searchValue => ({ filterValue: createSearchObject(searchValue) }),
		setSearchValue: () => searchValue => ({ searchValue }),
	}),
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
		onFilterUpdate: ({ setFilterValue }) => fp.debounce(SEARCH_DELAY, (searchValue) => {
			setFilterValue(searchValue)
		}),
	}),
	withHandlers({
		onSearchChange: ({ setSearchValue, onFilterUpdate }) => (event) => {
			const searchValue = event.target.value

			setSearchValue(searchValue)
			onFilterUpdate(searchValue)
		},

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
				term: fp.last(state.filtered).value,
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
