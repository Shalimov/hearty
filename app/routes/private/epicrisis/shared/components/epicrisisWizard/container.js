import fp from 'lodash/fp'
import {
	compose,
	withProps,
	withHandlers,
	withState,
	lifecycle,
} from 'recompose'

import EpicrisisWizardComponent from './component'
import wizardItems from './wizard.items'

let containerRef = null

export default compose(
	withState('currentStep', 'setCurrentStep', 0),
	withProps({ items: wizardItems }),
	withHandlers({
		onContainerRef: () => (ref) => {
			containerRef = ref
		},

		onStepChanged: ({ setCurrentStep }) => (currentStep) => {
			fp.invoke('scrollIntoView', containerRef)
			setCurrentStep(currentStep)
		},

		onInternalSubmit: ({ onSubmit, initialValues }) => (wizardData) => {
			const _id = fp.get('_id', initialValues)
			const epicrisisData = fp.omit([
				'template',
				'selectedMedicineFields',
				'selectedAnalyses',
			], wizardData)

			onSubmit({ ...epicrisisData, _id })
		},
	}),
	lifecycle({
		componentWillMount() {
			containerRef = null
		},
	})
)(EpicrisisWizardComponent)
