import {
	compose,
	defaultProps,
	withState,
	withHandlers,
	withProps,
} from 'recompose'
import { tryAsync } from 'utils/try'

import withQueries from './hocs/with.queries'

import columnsDescriptions from './column.descrtiption'
import MedicineGroupsOverviewComponent from './component'

const DEFAULT_PAGE_SIZE = 15

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withState('queryInput', 'setQueryInput', ({ pageSize }) => ({
		limit: pageSize,
		skip: 0,
	})),
	withQueries,
	withHandlers({
		onRemove: () =>
			tryAsync(async () => {
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
	withProps(() => ({
		columns: columnsDescriptions(),
	}))
)(MedicineGroupsOverviewComponent)
