import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

const availableRegions = fp.map('value', t('regions'))

export default ({ initialValues = {} }) => ({
	fullnameField: {
		initialValue: initialValues.fullname,
		scheme: Ego.string()
			.label(t('labels.fullname'))
			.required(),
	},

	birthdateField: {
		initialValue: initialValues.birthdate,
		scheme: Ego.date()
			.label(t('labels.birthdate'))
			.required(),
	},

	regionField: {
		initialValue: initialValues.region,
		scheme: Ego.string()
			.label(t('labels.region'))
			.enum(availableRegions)
			.required(),
	},

	addressField: {
		initialValue: initialValues.address,
		scheme: Ego.string()
			.label(t('labels.address'))
			.required(),
	},
})
