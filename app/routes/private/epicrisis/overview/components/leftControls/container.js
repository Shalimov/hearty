import { compose, withHandlers } from 'recompose'

import LeftControlsComponent from './component'

export default compose(
	withHandlers({
		onInternalPrint: ({ onPrint, value }) => ({ templateName }) => {
			// TODO: fix it
			onPrint({ _id: value._id, templateName })
		},
	})
)(LeftControlsComponent)
