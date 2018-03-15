import moment from 'moment'
import { compose, withHandlers } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import patientInfoModel, { mapping } from './patient.info.model'
import PatientIntoComponent from './component'

export default compose(
	withFormModel(patientInfoModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: ({ formModel }) => mapper(formModel.value, mapping),
	}),
	withHandlers({
		isValidDate: () => date => moment().isAfter(date),
	})
)(PatientIntoComponent)
