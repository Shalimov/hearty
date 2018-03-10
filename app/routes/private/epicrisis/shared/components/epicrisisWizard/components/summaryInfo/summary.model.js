import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	summaryField: {
		initialValue: fp.get('summary', initialValues),
		scheme: Ego.string()
			.label(t('labels.summary'))
			.required(),
	},
})

export const mapping = [
	['summaryField', 'summary'],
]
