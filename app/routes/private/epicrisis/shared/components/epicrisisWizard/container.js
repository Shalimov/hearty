import { compose, withProps, withHandlers } from 'recompose'

import EpicrisisWizardComponent from './component'

import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import TemplatesFinder from './components/templatesFinder'

export default compose(
	withProps({
		items: [
			TemplatesFinder,
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
