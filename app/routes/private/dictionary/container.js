import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps, withProps } from 'recompose'
import { tryAsync } from 'utils/try'

import columnsDescription from './column.descrtiption'

import withMutations from './hocs/with.mutations'
import withQueries from './hocs/with.queries'
import SubTermEditor from './components/subTermEditor'
import DictionaryComponent from './component'

const DEFAULT_PAGE_SIZE = 20

export default compose(
	defaultProps({
		columns: columnsDescription,
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withQueries,
	withMutations,
	withHandlers({
		onAddTerm: ({ createTermMutation, data }) => tryAsync(async ({ term }) => {
			await createTermMutation({
				variables: { term },
			})

			await data.refetch()
		}),

		onAddSubterm: ({ createSubtermMutation, data }) => tryAsync(async ({ _id, term }) => {
			await createSubtermMutation({
				variables: { _id, term },
			})

			await data.refetch()
		}),

		// TODO: maybe use refetch to do it
		onFetchData: ({ data }) =>
			tryAsync(async (state) => {
				if (data.loading) {
					return
				}

				const filterCriteria = fp.head(state.filtered) || {}

				data.fetchMore({
					variables: {
						input: {
							limit: DEFAULT_PAGE_SIZE,
							skip: state.page * DEFAULT_PAGE_SIZE,
							term: filterCriteria.value,
						},
					},
					updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
				})
			}),
	}),
	withProps(({ onAddSubterm }) => ({
		SubTermEditor: withProps({
			onAddSubterm,
		})(SubTermEditor),
	}))
)(DictionaryComponent)

