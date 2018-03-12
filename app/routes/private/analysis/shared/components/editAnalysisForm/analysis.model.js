import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	nameField: {
		initialValue: initialValues.name,
		scheme: Ego.string()
			.label(t('labels.name'))
			.required(),
	},
	patternField: {
		initialValue: initialValues.pattern,
		scheme: Ego.string()
			.label(t('labels.analysis.pattern'))
			.required(),
	},
	basicField: {
		initialValue: fp.isBoolean(initialValues.basic) ? initialValues.basic : true,
		scheme: Ego.boolean()
			.label(t('labels.analysis.basic'))
			.required(),
	},
})

export const mapping = [
	['nameField', 'name'],
	['patternField', 'pattern'],
	['basicField', 'basic'],
]
