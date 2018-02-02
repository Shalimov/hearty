import { compose, mapProps, withHandlers, withProps } from 'recompose'

import columnsDescription from './columns.description'

import ControlsCell from '../controlsCell'
import SubTermEditorComponent from './component'

export default compose(
	mapProps(row => ({
		item: row.original,
		onAddSubterm: row.onAddSubterm,
		onRemoveSubterm: row.onRemoveSubterm,
	})),
	withHandlers({
		onInternalAddSubterm: ({ onAddSubterm, item }) => (formData) => {
			onAddSubterm({
				...formData,
				_id: item._id,
			})
		},
	}),
	withProps(({ item, onRemoveSubterm }) => {
		const wrappedControlCell = withProps({
			parent: item,
			onRemove: onRemoveSubterm,
		})(ControlsCell)

		return {
			columns: columnsDescription(wrappedControlCell),
		}
	})
)(SubTermEditorComponent)
