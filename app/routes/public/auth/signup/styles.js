import { StyleSheet } from 'aphrodite'
import { toVw, toVh, toPx, tags } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { colors, measures, font } from 'styles/variables'

const { unit } = measures

const containerPadTop = 12 * unit
const containerPadLRB = 10 * unit

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
	},

	imageContainer: {
		width: toVw(60),
		height: toVh(100),
		...mixins.clearfix(),
	},

	signupContainer: {
		...mixins.flexColumn(),
		boxSizing: 'border-box',
		width: toVw(60),
		height: toVh(100),
		padding: `${containerPadTop}px ${containerPadLRB}px ${containerPadLRB}px`,
		overflow: 'auto',
	},

	pageHeader: {
		...mixins.font({ size: font.font30, weight: font.weight.bold }),
		marginBottom: toPx(5 * unit),
	},

	headerDelimiter: {
		margin: tags.px`0 ${3 * unit}`,
	},

	stepIndicator: {
		color: colors.color3,
	},
})

export default styles
