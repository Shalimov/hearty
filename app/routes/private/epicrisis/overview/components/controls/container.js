import { compose, withHandlers } from 'recompose'

import ControlsComponent from './component'

export default compose(
	withHandlers({
		onInternalPrint: ({ onPrint, value }) => () => {
			// TODO: fix it
			onPrint({ _id: value._id, templateName: 'main.docx' })
		},

		onInternalRemove: ({ onRemove, value }) => () => {
			onRemove(value._id)
		},
	})
)(ControlsComponent)
