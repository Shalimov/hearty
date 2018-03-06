import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	xrayCRGOGKField: {
		initialValue: fp.get('xray.crgogk', initialValues),
		scheme: Ego.string()
			.label(t('labels.xray.crgogk')),
	},

	xrayCRGSkullField: {
		initialValue: fp.get('xray.crgSkull', initialValues),
		scheme: Ego.string()
			.label(t('labels.xray.crgSkull')),
	},

	xrayJointsRoentgenographyField: {
		initialValue: fp.get('xray.jointsRoentgenography', initialValues),
		scheme: Ego.string()
			.label(t('labels.xray.jointsRoentgenography')),
	},

	xrayOtherField: {
		initialValue: fp.get('xray.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})

export const mapping = [
	['xrayCRGOGKField', 'xray.crgogk'],
	['xrayCRGSkullField', 'xray.crgSkull'],
	['xrayJointsRoentgenographyField', 'xray.jointsRoentgenography'],
	['xrayOtherField', 'xray.other'],
]
