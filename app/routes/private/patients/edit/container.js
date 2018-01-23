import { compose, withHandlers } from 'recompose'

import EditPatientComponent from './component'

export default compose(
	withHandlers({
		onSubmit: () => () => {
			alert('Submit')
		},

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditPatientComponent)
