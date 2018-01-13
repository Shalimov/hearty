import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'

import userModel from './user.model'
import UserDetailsFormComponent from './component'

export default compose(
	withFormModel(userModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => onSubmit(formModel.value, formModel),

		onInternalCancel: ({ formModel, onCancel }) => () => {
			onCancel(formModel.value)
		},
	}),
)(UserDetailsFormComponent)
