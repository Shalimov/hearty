import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	diagnosisField: {
		initialValue: initialValues.diagnosis,
		scheme: Ego.string()
			.label(t('labels.diagnosis'))
			.required(),
	},

	diagnosisComplicationField: {
		initialValue: initialValues.diagnosisComplication,
		scheme: Ego.string()
			.label(t('labels.diagnosisComplication'))
			.required(),
	},

	followingDiagnosisPartField: {
		initialValue: initialValues.followingDiagnosisPartField,
		scheme: Ego.string()
			.label(t('labels.followingDiagnosisPart'))
			.required(),
	},
})
