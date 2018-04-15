import { compose, withHandlers } from 'recompose'

import RightControlsComponent from './component'

export default compose(
	withHandlers({
		onInternalRemove: ({ onRemove, value }) => () => {
			onRemove(value._id)
		},
	})
)(RightControlsComponent)
