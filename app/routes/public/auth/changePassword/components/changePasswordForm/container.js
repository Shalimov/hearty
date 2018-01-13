import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'

import changePasswordModel from './change.password.model'
import ChangePasswordFormComponent from './component'

export default compose(
	withFormModel(changePasswordModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => onSubmit(formModel.value, formModel),
	})
)(ChangePasswordFormComponent)
