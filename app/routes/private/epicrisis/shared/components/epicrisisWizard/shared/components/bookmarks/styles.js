import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, toPr, toVh, toVw, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		alignItems: 'center',
		position: 'fixed',
		right: 0,
		bottom: 0,
		top: 0,
		zIndex: 1000,
		pointerEvents: 'none',
	},

	bookmarksHeader: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
		textAlign: 'center',
		marginBottom: toPx(unit),
	},

	bookmarksContainer: {
		backgroundColor: colors.white100,
		height: toVh(50),
		borderTop: `1px solid ${colors.color7}`,
		borderLeft: `1px solid ${colors.color7}`,
		borderBottom: `1px solid ${colors.color7}`,
		transition: 'width 600ms',
		pointerEvents: 'all',
	},

	bookmarkAreaWrapper: {
		minWidth: toVw(20),
		padding: toPx(unit),
		height: `calc(${toPr(100)} - ${toPx(3 * unit)})`,
	},

	expanded: {
		width: toVw(30),
		borderRight: `4px solid ${colors.color7}`,
	},

	collapsed: {
		width: 0,
		borderRight: `3px solid ${colors.color7}`,
	},

	toggle: {
		pointerEvents: 'all',
		position: 'relative',
	},

	iconWrapper: {
		borderRadius: tags.px`${5} 0 0 ${5}`,
		backgroundColor: colors.color7,
		padding: tags.px`${6 * unit} ${unit}`,
		color: colors.white100,
	},

	exclamation: {
		fontSize: font.font18,
		color: colors.color11,
		position: 'absolute',
		top: toPx(-9),
		left: toPx(-9),
		backgroundColor: colors.white100,
		borderRadius: toPx(50),
		width: toPx(2 * unit),
		height: toPx(2 * unit),
	},

	inputInnerContainer: {
		height: toPr(100),
	},

	inputContainer: {
		height: 'inherit',
	},
})

export default styles
