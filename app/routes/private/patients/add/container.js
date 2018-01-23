import { compose, withHandlers } from 'recompose'

import AddPatientComponent from './component'

export default compose(
	withHandlers({
		onSubmit: () => () => {
			alert('Submit')
		},

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddPatientComponent)
