import fp from 'lodash/fp'
import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
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
		const selectedFields = selectedMedicineFields || fp.map('medicine', medicineRecommendations)

		const groupedRecommendations = fp.groupBy('medicine', medicineRecommendations)
		const formFields = fp.map(name => ({
			value: fp.get('recommendation', fp.head(groupedRecommendations[name])),
			name,
		}), selectedFields)

		return createModel(formFields)
	}),
	withWizard({
		transformSubmitData: fp.flow(
			fp.get('formModel.value'),
			fp.entries,
			fp.map(([key, value]) => ({ medicine: key, recommendation: value })),
			medicineRecommendations => ({ medicineRecommendations })
		),
	})
)(MedicineTakingRecommendationComponent)
