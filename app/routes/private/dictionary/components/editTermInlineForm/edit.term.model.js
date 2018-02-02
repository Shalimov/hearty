import Ego from 'utils/validation'
import t from 'i18n'

export default ({ initialValues }) => ({
	termField: {
		initialValue: initialValues.term,
		scheme: Ego.string()
			.label(t('labels.term')),
	},
})


export const mapping = [
	['termField', 'term'],
]
