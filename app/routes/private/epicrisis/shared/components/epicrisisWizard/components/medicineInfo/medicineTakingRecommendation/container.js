import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import Ego from 'utils/validation'

import MedicineTakingRecommendationComponent from './component'

const createModel = fp.flow(
	fp.map(({ name, value }) => [
		name,
		{
			initialValue: value,
			scheme: Ego.string().label(name).required(),
		},
	]),
	fp.fromPairs
)

// TODO: Refactoring & initial values
export default compose(
	withFormModel(({ wizardData, initialValues }) => {
		const wizardDataArray = [...wizardData.values()]
		const { selectedMedicineFields } = Object.assign({}, ...wizardDataArray)
		const { medicineRecommendations } = initialValues
		
		const groupedRecommendations = fp.groupBy('medicine', medicineRecommendations)
		const selectedFields = fp.map(name => ({
			value: fp.get('recommendation', fp.head(groupedRecommendations[name])),
			name,
		}), selectedMedicineFields)

		return createModel(selectedFields)
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
