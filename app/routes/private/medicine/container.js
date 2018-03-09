import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps, withProps, withState } from 'recompose'
import { tryAsync } from 'utils/try'

import columnsDescription from './column.descrtiption'

import withMutations from './hocs/with.mutations'
import withQueries from './hocs/with.queries'

import ControlsCell from './components/controlsCell'
import EditInlineForm from './components/editInlineForm'
import MedicineEditor from './components/medicineEditor'
import MedicineComponent from './component'

const DEFAULT_PAGE_SIZE = 20

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
		onAddGroup: ({ createMedicineGroupMutation }) =>
			tryAsync(({ value: groupName }) => createMedicineGroupMutation({
				variables: { groupName },
				refetchQueries: ['MedicineGroupOverviewQuery'],
			})),

		onAddMedicine: ({ createMedicineMutation }) =>
			tryAsync(({ _id, value: name }) => createMedicineMutation({
				variables: { _id, name },
				refetchQueries: ['MedicineGroupOverviewQuery'],
			})),

		onEditGroup: ({ updateMedicineGroupMutation }) =>
			tryAsync(({ _id, value: groupName }) =>
				updateMedicineGroupMutation({ variables: { _id, groupName } })),

		onRemoveGroup: ({ removeMedicineGroupMutation }) =>
			tryAsync(({ _id }) => removeMedicineGroupMutation({
				variables: { _id },
				refetchQueries: ['MedicineGroupOverviewQuery'],
			})),

		// parent _id
		onRemoveMedicine: ({ removeMedicineMutation }) =>
			tryAsync(({ name }, { _id }) => removeMedicineMutation({
				variables: { _id, name },
				refetchQueries: ['MedicineGroupOverviewQuery'],
			})),

		onFetchData: ({ data, pageSize, loadMore, setQueryInput }) =>
			tryAsync((state) => {
				if (data.loading) {
					return
				}

				const filterCriteria = fp.head(state.filtered) || {}
				const queryInput = {
					limit: pageSize,
					skip: state.page * pageSize,
					term: filterCriteria.value,
				}

				setQueryInput(queryInput)

				return loadMore(queryInput)
			}),
	}),
	withProps(({ onEditGroup, onRemoveGroup, onAddMedicine, onRemoveMedicine }) => {
		const wrappedEditInlineForm = withProps(({ value }) => ({
			initialValues: {
				...value,
				value: value.groupName,
			},
			onSubmit: onEditGroup,
		}))(EditInlineForm)

		const wrappedControlCell = withProps({
			onRemove: onRemoveGroup,
		})(ControlsCell)

		return {
			columns: columnsDescription(
				wrappedEditInlineForm,
				wrappedControlCell
			),
			MedicineEditor: withProps({
				onAddMedicine,
				onRemoveMedicine,
			})(MedicineEditor),
		}
	})
)(MedicineComponent)

