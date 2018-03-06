import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	diagnosisField: {
		initialValue: fp.get('diagnosis.main', initialValues),
		scheme: Ego.string()
			.label(t('labels.diagnosis.main'))
			.required(),
	},

	diagnosisComplicationField: {
		initialValue: fp.get('diagnosis.complication', initialValues),
		scheme: Ego.string()
			.label(t('labels.diagnosis.complication')),
	},

	followingDiagnosisPartField: {
		initialValue: fp.get('diagnosis.followingPart', initialValues),
		scheme: Ego.string()
			.label(t('labels.diagnosis.followingPart')),
	},
})

export const mapping = [
	['diagnosisField', 'diagnosis.main'],
	['diagnosisComplicationField', 'diagnosis.complication'],
	['followingDiagnosisPartField', 'diagnosis.followingPart'],
]
