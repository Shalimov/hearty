import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues }) => ({
	termField: {
		initialValue: initialValues.term,
		scheme: Ego.string()
			.label(t('labels.term'))
			.required(),
	},
})

export const mapping = [
	['termField', 'term'],
]
