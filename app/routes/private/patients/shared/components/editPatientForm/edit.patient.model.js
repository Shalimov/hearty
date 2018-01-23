import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

const availableRegions = fp.map('value', t('regions'))

export default ({ initialValues = {} }) => ({
	fullnameField: {
		initialValue: initialValues.fullname,
		scheme: Ego.string().required(),
	},

	birthdateField: {
		initialValue: initialValues.birthdate,
		scheme: Ego.string().required(),
	},

	regionField: {
		initialValue: initialValues.region,
		scheme: Ego.string().enum(availableRegions).required(),
	},

	addressField: {
		initialValue: initialValues.address,
		scheme: Ego.string().required(),
	},
})
