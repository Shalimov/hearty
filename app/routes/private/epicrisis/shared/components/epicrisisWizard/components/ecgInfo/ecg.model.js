import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	ecgArrivalField: {
		initialValue: fp.get('ecg.arrival', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecg.arrival')),
	},

	ecgDynamicField: {
		initialValue: fp.get('ecg.dynamic', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecg.dynamic')),
	},

	ecgKSField: {
		initialValue: fp.get('ecg.ks', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecg.ks')),
	},

	ecgOtherField: {
		initialValue: fp.get('ecg.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})

export const mapping = [
	['ecgArrivalField', 'ecg.arrival'],
	['ecgDynamicField', 'ecg.dynamic'],
	['ecgKSField', 'ecg.ks'],
	['ecgOtherField', 'ecg.other'],
]
