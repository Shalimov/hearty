import { compose, withHandlers } from 'recompose'

import ControlsComponent from './component'

export default compose(
	withHandlers({
		onInternalPrint: ({ onPrint, value }) => ({ templateName }) => {
			// TODO: fix it
			onPrint({ _id: value._id, templateName })
		},

		onInternalRemove: ({ onRemove, value }) => () => {
			onRemove(value._id)
		},
	})
)(ControlsComponent)
