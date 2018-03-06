import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	usdScopiaOBPField: {
		initialValue: fp.get('usdScopia.obp', initialValues),
		scheme: Ego.string()
			.label(t('labels.usdScopia.obp')),
	},

	usdScopiaBCAField: {
		initialValue: fp.get('usdScopia.bca', initialValues),
		scheme: Ego.string()
			.label(t('labels.usdScopia.bca')),
	},

	usdScopiaFGDSField: {
		initialValue: fp.get('usdScopia.fgds', initialValues),
		scheme: Ego.string()
			.label(t('labels.usdScopia.fgds')),
	},

	usdScopiaBronchoscopyField: {
		initialValue: fp.get('usdScopia.bronchoscopy', initialValues),
		scheme: Ego.string()
			.label(t('labels.usdScopia.bronchoscopy')),
	},

	usdScopiaOtherField: {
		initialValue: fp.get('usdScopia.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})

export const mapping = [
	['usdScopiaOBPField', 'usdScopia.obp'],
	['usdScopiaBCAField', 'usdScopia.bca'],
	['usdScopiaFGDSField', 'usdScopia.fgds'],
	['usdScopiaBronchoscopyField', 'usdScopia.bronchoscopy'],
	['usdScopiaOtherField', 'usdScopia.other'],
]
