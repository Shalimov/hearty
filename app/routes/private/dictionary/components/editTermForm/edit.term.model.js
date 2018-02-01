import Ego from 'utils/validation'
import t from 'i18n'

export default {
	termField: Ego.string()
		.label(t('labels.term')),
}

export const mapping = [
	['termField', 'term'],
]
