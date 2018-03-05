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
		initialValue: fp.get('patient.fullname', initialValues),
		scheme: Ego.string()
			.label(t('labels.fullname'))
			.required(),
	},

	birthdateField: {
		initialValue: toDate(fp.get('patient.birthdate', initialValues)),
		scheme: Ego.date()
			.label(t('labels.birthdate'))
			.required(),
	},

	regionField: {
		initialValue: fp.get('patient.region', initialValues),
		scheme: Ego.number()
			.forProp(fp.get('value'))
			.label(t('labels.region'))
			.required(),
	},

	addressField: {
		initialValue: fp.get('patient.address', initialValues),
		scheme: Ego.string()
			.label(t('labels.address'))
			.required(),
	},

	jobInfoField: {
		initialValue: fp.get('patient.jobInfo', initialValues),
		scheme: Ego.string()
			.label(t('labels.jobInfo'))
			.required(),
	},

	arrivalAtField: {
		initialValue: toDate(fp.get('patient.arrivalAt', initialValues)),
		scheme: Ego.date()
			.label(t('labels.arrivalAt'))
			.required(),
	},

	departureAtField: {
		initialValue: toDate(fp.get('patient.departureAt', initialValues)),
		scheme: Ego.date()
			.label(t('labels.departureAt')),
	},
})

export const mapping = [
	['epicrisisNoField', 'epicrisisNo'],
	['fullnameField', 'patient.fullname'],
	['birthdateField', 'patient.birthdate'],
	['regionField', 'patient.region'],
	['addressField', 'patient.address'],
	['jobInfoField', 'patient.jobInfo'],
	['arrivalAtField', 'patient.arrivalAt'],
	['departureAtField', 'patient.departureAt'],
]
