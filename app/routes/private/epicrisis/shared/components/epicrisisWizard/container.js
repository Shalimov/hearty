import { compose, withProps, withHandlers } from 'recompose'

import EpicrisisWizardComponent from './component'

import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import TemplatesFinder from './components/templatesFinder'

export default compose(
	withProps({
		items: [
			PatientInfo,
			DiagnosisInfo,
			TemplatesFinder,
		],
	}),
	withHandlers({
		onCancel: () => () => {
		},

		onSubmit: () => () => {
		},
	})
)(EpicrisisWizardComponent)
