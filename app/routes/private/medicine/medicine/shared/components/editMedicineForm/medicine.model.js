import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	nameField: {
		initialValue: initialValues.name,
		scheme: Ego.string()
			.label(t('labels.medicine.drug'))
			.required(),
	},
	prescriptionField: {
		initialValue: initialValues.note,
		scheme: Ego.string()
			.label(t('labels.medicine.defaultPrescription')),
	},
})

export const mapping = [
	['nameField', 'name'],
	['prescriptionField', 'prescription'],
]
