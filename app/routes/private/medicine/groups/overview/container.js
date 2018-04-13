import {
	compose,
	defaultProps,
	withState,
	withHandlers,
	withProps,
} from 'recompose'
import { tryAsync } from 'utils/try'

import withQueries from './hocs/with.queries'
import withMutations from './hocs/with.mutations'

import columnsDescriptions from './column.descrtiption'
import MedicineGroupsOverviewComponent from './component'
import LeftControls from './components/leftControls'
import RightControls from './components/rightControls'

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
	withMutations,
	withHandlers({
		onRemove: ({ removeMedicineGroup }) =>
			tryAsync(async (groupId) => {
				await removeMedicineGroup({
					variables: {
						_id: groupId,
					},
					refetchQueries: ['MedicineGroupOverviewQuery'],
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
		const wrapRightControl = withProps({ onRemove })

		return {
			columns: columnsDescriptions(
				LeftControls,
				wrapRightControl(RightControls)
			),
		}
	})
)(MedicineGroupsOverviewComponent)
