import { compose, mapProps, withHandlers, withProps } from 'recompose'

import columnsDescription from './columns.description'

import ControlsCell from '../controlsCell'
import MedicineEditorComponent from './component'

export default compose(
	mapProps(row => ({
		item: row.original,
		onAddMedicine: row.onAddMedicine,
		onRemoveMedicine: row.onRemoveMedicine,
	})),
	withHandlers({
		onInternalAddMedicine: ({ onAddMedicine, item }) => (formData) => {
			onAddMedicine({
				...formData,
				_id: item._id,
			})
		},
	}),
	withProps(({ item, onRemoveMedicine }) => {
		const wrappedControlCell = withProps({
			parent: item,
			onRemove: onRemoveMedicine,
		})(ControlsCell)

		return {
			columns: columnsDescription(wrappedControlCell),
		}
	})
)(MedicineEditorComponent)
