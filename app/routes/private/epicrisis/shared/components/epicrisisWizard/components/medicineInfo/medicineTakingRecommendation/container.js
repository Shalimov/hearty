import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import Ego from 'utils/validation'

import MedicineTakingRecommendationComponent from './component'

const createModel = fp.flow(
	fp.map(name => [name, Ego.string().label(name).required()]),
	fp.fromPairs
)

// TODO: Refactoring
export default compose(
	withFormModel(({ wizardData }) => {
		const wizardDataArray = [...wizardData.values()]
		const { selectedMedicineFields } = Object.assign(...wizardDataArray)
		return createModel(selectedMedicineFields)
	}),
	withHandlers({
		onInternalSubmit: ({ onSubmit }) => (formData) => {
			const getMedicineRecommendations =  fp.flow(
				fp.entries,
				fp.map(([key, value]) => ({ medicine: key, recommendation: value }))
			)

			onSubmit({
				medicineRecommendations: getMedicineRecommendations(formData),
			})
		},
	})
)(MedicineTakingRecommendationComponent)
