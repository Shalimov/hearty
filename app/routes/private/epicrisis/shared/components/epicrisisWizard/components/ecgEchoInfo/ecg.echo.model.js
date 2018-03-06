import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	ecgEchoArrivalField: {
		initialValue: fp.get('ecgEcho.arrival', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecgEcho.arrival')),
	},

	ecgEchoDynamicField: {
		initialValue: fp.get('ecgEcho.dynamic', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecgEcho.dynamic')),
	},

	ecgEchoKSField: {
		initialValue: fp.get('ecgEcho.ks', initialValues),
		scheme: Ego.string()
			.label(t('labels.ecgEcho.ks')),
	},

	ecgEchoOtherField: {
		initialValue: fp.get('ecgEcho.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})

export const mapping = [
	['ecgEchoArrivalField', 'ecgEcho.arrival'],
	['ecgEchoDynamicField', 'ecgEcho.dynamic'],
	['ecgEchoKSField', 'ecgEcho.ks'],
	['ecgEchoOtherField', 'ecgEcho.other'],
]
