import { compose, withProps, withHandlers } from 'recompose'

import EpicrisisWizardComponent from './component'

import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'

export default compose(
	withProps({
		items: [
			PatientInfo,
			DiagnosisInfo,
		],
	}),
	withHandlers({
		onCancel: () => () => {
		},

		onSubmit: () => () => {
		},
	})
)(EpicrisisWizardComponent)
