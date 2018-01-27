import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

const toDate = date => date ? new Date(date) : date

export default ({ initialValues }) => ({
	fullnameField: {
		initialValue: initialValues.fullname,
		scheme: Ego.string()
			.label(t('labels.fullname'))
			.required(),
	},

	birthdateField: {
		initialValue: toDate(initialValues.birthdate),
		scheme: Ego.date()
			.label(t('labels.birthdate'))
			.required(),
	},

	regionField: {
		initialValue: initialValues.region,
		scheme: Ego.number()
			.forProp(fp.get('value'))
			.label(t('labels.region'))
			.required(),
	},

	addressField: {
		initialValue: initialValues.address,
		scheme: Ego.string()
			.label(t('labels.address'))
			.required(),
	},
})

export const mapping = [
	['fullnameField', 'fullname'],
	['birthdateField', 'birthdate'],
	['regionField', 'region'],
	['addressField', 'address'],
]
