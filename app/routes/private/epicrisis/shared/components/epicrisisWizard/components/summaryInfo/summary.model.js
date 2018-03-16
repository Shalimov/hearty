import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

const toDate = date => date ? new Date(date) : date

export default ({ initialValues = {} }) => ({
	summaryField: {
		initialValue: fp.get('summary', initialValues),
		scheme: Ego.string()
			.label(t('labels.summary')),
	},
	departureAtField: {
		initialValue: toDate(fp.get('patient.departureAt', initialValues)),
		scheme: Ego.date()
			.label(t('labels.departureAt')),
	},
})

export const mapping = [
	['summaryField', 'summary'],
	['departureAtField', 'patient.departureAt'],
]
