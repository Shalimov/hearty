import { compose, withHandlers } from 'recompose'

import AddEpicrisisComponent from './component'

export default compose(
	withHandlers({
		onCancel: () => () => {
		},

		onSubmit: () => () => {
		},
	})
)(AddEpicrisisComponent)
