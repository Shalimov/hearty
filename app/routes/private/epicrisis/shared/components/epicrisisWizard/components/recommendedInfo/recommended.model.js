import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	recommendedField: {
		initialValue: fp.get('recommended', initialValues),
		scheme: Ego.string()
			.label(t('labels.recommended'))
			.required(),
	},
})

export const mapping = [
	['recommendedField', 'recommended'],
]
