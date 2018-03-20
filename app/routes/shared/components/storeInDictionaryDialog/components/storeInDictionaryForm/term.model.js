import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	termField: Ego.any()
		.label(t('labels.term'))
		.required(),
	subtermField: {
		initialValue: initialValues.subterm,
		scheme:  Ego.string().label(t('labels.subTerm')).required(),
	},
})

export const mapping = [
	['termField', 'term'],
	['subtermField', 'subterm'],
]
