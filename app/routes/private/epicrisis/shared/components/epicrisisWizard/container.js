import fp from 'lodash/fp'
import { compose, withProps, withHandlers, lifecycle } from 'recompose'

import EpicrisisWizardComponent from './component'
import wizardItems from './wizard.items'

let containerRef = null

export default compose(
	withProps({ items: wizardItems }),
	withHandlers({
		onContainerRef: () => (ref) => {
			containerRef = ref
		},

		onStepChanged: () => () => {
			fp.invoke('scrollIntoView', containerRef)
		},

		onInternalSubmit: ({ onSubmit, initialValues }) => (wizardData) => {
			const _id = fp.get('_id', initialValues)
			const epicrisisData = fp.omit([
				'template',
				'selectedMedicineFields',
				'selectedAnalyses',
			], wizardData)

			// TODO: temp
			onSubmit({ ...epicrisisData, _id }, wizardData)
		},
	}),
	lifecycle({
		componentWillMount() {
			containerRef = null
		},
	})
)(EpicrisisWizardComponent)
