import fp from 'lodash/fp'
import { compose, withProps, withHandlers } from 'recompose'

import EpicrisisWizardComponent from './component'
import wizardItems from './wizard.items'

export default compose(
	withProps({ items: wizardItems }),

	withHandlers({
		onInternalSubmit: ({ onSubmit }) => (wizardData) => {
			const epicrisisData = fp.omit([
				'template',
				'selectedMedicineFields',
				'selectedAnalyses',
			], wizardData)

			// TODO: temp
			onSubmit(epicrisisData, wizardData)
		},
	})
)(EpicrisisWizardComponent)
