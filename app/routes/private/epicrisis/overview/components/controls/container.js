import { compose, withHandlers } from 'recompose'

import ControlsComponent from './component'

export default compose(
	withHandlers({
		onInternalRemove: ({ onRemove, value }) => () => {
			onRemove(value._id)
		},
	})
)(ControlsComponent)
