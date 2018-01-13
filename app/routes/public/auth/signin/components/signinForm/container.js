import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import signInModel, { mapping as signInModelMapping } from './signin.model'
import SignInFormComponent from './component'

export default compose(
	withFormModel(signInModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedValues = mapper(formModel.value, signInModelMapping)
			onSubmit(mappedValues) 
		},
	})
)(SignInFormComponent)
