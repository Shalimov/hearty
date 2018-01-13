import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'

import forgotPasswordModel from './forgot.password.model'
import ForgotPasswordFormComponent from './component'

export default compose(
	withFormModel(forgotPasswordModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) =>
			() => onSubmit(formModel.value, formModel),
	})
)(ForgotPasswordFormComponent)
