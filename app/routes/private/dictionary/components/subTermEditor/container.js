import { compose, mapProps, withHandlers } from 'recompose'

import SubTermEditorComponent from './component'

export default compose(
	mapProps((row) => ({
		item: row.original,
		onAddSubterm: row.onAddSubterm,
	})),
	withHandlers({
		onInternalAddSubterm: ({ onAddSubterm, item }) => (formData) => {
			onAddSubterm({
				...formData,
				_id: item._id,
			})
		},
	}),
)(SubTermEditorComponent)
