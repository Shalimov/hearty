import fp from 'lodash/fp'
import { compose } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
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

const toFormData = fp.flow(
	fp.entries,
	fp.map(([key, value]) => ({ medicine: key, recommendation: value })),
	medicineRecommendations => ({ medicineRecommendations })
)
// TODO: Refactoring & initial values
export default compose(
	withFormModel(({ wizardData, initialValues }) => {
		const wizardDataArray = [...wizardData.values()]
		const { selectedMedicineFields } = Object.assign({}, ...wizardDataArray)
		const { medicineRecommendations } = initialValues
		const selectedFields = selectedMedicineFields ? 
			fp.map('value', selectedMedicineFields) :
			fp.map('medicine', medicineRecommendations)

		const groupedRecommendations = fp.groupBy('medicine', medicineRecommendations)
		const defaultRecommendations = fp.groupBy(fp.get('meta.medicine.name'), selectedMedicineFields)
		const getDefaultPrescription = fp.flow(fp.first, fp.get('meta.medicine.prescription'))
		const getGroupedRecommendation = fp.flow(fp.first, fp.get('recommendation'))

		const formFields = fp.map(name => {
			const value = getGroupedRecommendation(groupedRecommendations[name]) ||
				getDefaultPrescription(defaultRecommendations[name])

			return {
				value,
				name,
			}
		}, selectedFields)

		return createModel(formFields)
	}),
	withWizardHooks({
		onRequestData: ({ formModel }) => (done) => {
			done(null, toFormData(formModel.value))
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	})
)(MedicineTakingRecommendationComponent)
