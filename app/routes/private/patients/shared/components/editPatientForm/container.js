import { compose, withHandlers, defaultProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import EditPatientModel, { mapping } from './edit.patient.model'
import EditPatientFormComponent from './component'

export default compose(
	defaultProps({
		initialValues: {},
	}),
	withFormModel(EditPatientModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ onSubmit, initialValues }) => (formData) => {
			const covertedModel = mapper(formData, mapping)

			onSubmit({
				_id: initialValues._id,
				...covertedModel,
			})
		},
	})
)(EditPatientFormComponent)
