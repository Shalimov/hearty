import fp from 'lodash/fp'
import Ego from 'utils/validation'
import t from 'i18n'

const DEFAULT_PRIORITY = 1

export default ({ initialValues = {} }) => ({
	groupNameField: {
		initialValue: initialValues.groupName,
		scheme: Ego.string()
			.label(t('labels.medicine.groups'))
			.required(),
	},
	priorityField: {
		initialValue: fp.getOr(DEFAULT_PRIORITY, 'priority', initialValues),
		scheme: Ego.number()
			.min(1)
			.max(100)
			.label(t('labels.medicine.priority'))
			.required(),
	},
	noteField: {
		initialValue: initialValues.note,
		scheme: Ego.string()
			.label(t('labels.medicine.note')),
	},
})

export const mapping = [
	['groupNameField', 'groupName'],
	['priorityField', 'priority'],
	['noteField', 'note'],
]
