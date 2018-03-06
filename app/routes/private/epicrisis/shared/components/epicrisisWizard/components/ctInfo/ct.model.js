import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	ctHeadField: {
		initialValue: fp.get('ct.head', initialValues),
		scheme: Ego.string()
			.label(t('labels.ct.head')),
	},

	ctOGKField: {
		initialValue: fp.get('ct.ogk', initialValues),
		scheme: Ego.string()
			.label(t('labels.ct.ogk')),
	},

	ctOBPField: {
		initialValue: fp.get('ct.obp', initialValues),
		scheme: Ego.string()
			.label(t('labels.ct.obp')),
	},

	ctOtherField: {
		initialValue: fp.get('ct.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})

export const mapping = [
	['ctHeadField', 'ct.head'],
	['ctOGKField', 'ct.ogk'],
	['ctOBPField', 'ct.obp'],
	['ctOtherField', 'ct.other'],
]
