import { StyleSheet } from 'aphrodite'
import { toVw, toVh, toPx, tags } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { font, measures } from 'styles/variables'

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

	resetContainer: {
		...mixins.flexColumn(),
		boxSizing: 'border-box',
		width: toVw(60),
		height: toVh(100),
		padding: tags.px`${containerPadTop} ${containerPadLRB} ${containerPadLRB}`,
		overflow: 'auto',
	},

	pageHeader: {
		...mixins.font({ size: font.font30, weight: font.weight.bold }),
		marginBottom: toPx(4 * unit),
	},

	pageDescription: {
		...mixins.font({ size: font.font16, weight: font.weight.normal }),
		marginBottom: toPx(4 * unit),
	},
})

export default styles
