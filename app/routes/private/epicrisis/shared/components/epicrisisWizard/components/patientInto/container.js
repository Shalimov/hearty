import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import patientInfoModel, { mapping } from './patient.info.model'
import PatientIntoComponent from './component'

export default compose(
	withFormModel(patientInfoModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(PatientIntoComponent)
