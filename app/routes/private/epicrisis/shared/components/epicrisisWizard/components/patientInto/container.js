import moment from 'moment'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import { withWizardHooks } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import patientInfoModel, { mapping } from './patient.info.model'
import PatientIntoComponent from './component'

export default compose(
	withFormModel(patientInfoModel, { spreadFields: true }),
	withWizardHooks({
		onRequestData: ({ formModel }) => (done) => {
			done(null, mapper(formModel.value, mapping))
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	}),
	withHandlers({
		isValidDate: () => date => moment().isAfter(date),
	})
)(PatientIntoComponent)
