import { compose, mapProps, withHandlers, withProps } from 'recompose'

import columnsDescription from './columns.description'

import ControlsCell from '../controlsCell'
import SubTermEditorComponent, { SubTermTemplate } from './component'

export default compose(
	mapProps(row => ({
		item: row.original,
		onAddSubterm: row.onAddSubterm,
		onRemoveSubterm: row.onRemoveSubterm,
	})),
	withHandlers({
		onInternalAddSubterm: ({ onAddSubterm, item }) => ({ term }) => {
			onAddSubterm({
				_id: item._id,
				term,
			})
		},
	}),
	withProps(({ item, onRemoveSubterm }) => {
		const wrappedControlCell = withProps({
			parent: item,
			onRemove: onRemoveSubterm,
		})(ControlsCell)

		return {
			columns: columnsDescription(wrappedControlCell, SubTermTemplate),
		}
	})
)(SubTermEditorComponent)
