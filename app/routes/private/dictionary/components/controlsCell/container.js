import { compose, withHandlers } from 'recompose'

import ControlsCellComponent from './component'

export default compose(
	withHandlers({
		onInternalRemoveTerm: ({ onRemoveTerm, value }) => () => {
			onRemoveTerm(value)
		},
	})
)(ControlsCellComponent)
