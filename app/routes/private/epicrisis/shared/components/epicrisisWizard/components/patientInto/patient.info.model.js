import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

const toDate = date => date ? new Date(date) : date

export default ({ initialValues = {} }) => ({
	epicrisisNoField: {
		initialValue: initialValues.epicrisisNo,
		scheme: Ego.string()
			.digitLine()
			.label(t('labels.epicrisisNo'))
			.required(),
	},

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

	jobInfoField: {
		initialValue: initialValues.jobInfo,
		scheme: Ego.string()
			.label(t('labels.jobInfo'))
			.required(),
	},

	arrivalAtField: {
		initialValue: toDate(initialValues.arrivalAt),
		scheme: Ego.date()
			.label(t('labels.arrivalAt'))
			.required(),
	},

	departureAtField: {
		initialValue: toDate(initialValues.departureAt),
		scheme: Ego.date()
			.label(t('labels.departureAt')),
	},
})

export const mapping = [
	['epicrisisNoField', 'epicrisisNo'],
	['fullnameField', 'fullname'],
	['birthdateField', 'birthdate'],
	['regionField', 'region'],
	['addressField', 'address'],
	['jobInfoField', 'jobInfo'],
	['arrivalAtField', 'arrivalAt'],
	['departureAtField', 'departureAt'],
]
