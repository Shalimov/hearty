import { compose, withHandlers } from 'recompose'

import ControlsCellComponent from './component'

export default compose(
	withHandlers({
		onInternalRemove: ({ onRemove, value, parent }) => () => {
			onRemove(value, parent)
		},
	})
)(ControlsCellComponent)
