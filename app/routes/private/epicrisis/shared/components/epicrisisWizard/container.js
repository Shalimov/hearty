import fp from 'lodash/fp'
import {
	compose,
	withProps,
	withHandlers,
	lifecycle,
} from 'recompose'
import { omitRecoursive } from 'utils/omit.recoursive'

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

		onInternalSubmit: ({ onSubmit, initialValues }) => (wizardData, options) => {
			const combinedData = fp.mergeAll([initialValues, wizardData])
			const cleanEpicrisisData = omitRecoursive([
				'selectedMedicineFields',
				'selectedAnalyses',
				'__typename',
			], combinedData)

			return onSubmit(cleanEpicrisisData, options)
		},
	}),
	lifecycle({
		componentWillMount() {
			containerRef = null
		},
	})
)(EpicrisisWizardComponent)
