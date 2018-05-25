import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, toVh, toVw, tags } from 'utils/styles'

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
	},

	bookmarksHeader: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
		textAlign: 'center',
	},

	bookmarksContainer: {
		backgroundColor: colors.white100,
		height: toVh(50),
		borderTop: `1px solid ${colors.color7}`,
		borderLeft: `1px solid ${colors.color7}`,
		borderBottom: `1px solid ${colors.color7}`,
		transition: 'width 600ms',
	},

	bookmarkPlaceholder: {
		minWidth: toVw(25),
		padding: tags.px`${unit} 0`,
		textAlign: 'center',
	},

	bookmarkListWrapper: {
		minWidth: toVw(20),
		padding: toPx(unit),
	},

	bookmarkList: {
		height: 'inherit',
		overflow: 'auto',
		transition: 'opacity 500ms',
	},

	bookmarkItem: {
		...mixins.flexRow(),
		justifyContent: 'space-between',
		padding: toPx(unit),
		borderBottom: `1px solid ${colors.color1}`,
	},

	expanded: {
		width: toVw(30),
	},

	collapsed: {
		width: 0,
	},

	iconWrapper: {
		borderRadius: tags.px`${5} 0 0 ${5}`,
		backgroundColor: colors.color7,
		padding: tags.px`${6 * unit} ${unit}`,
		color: colors.white100,
	},
})

export default styles
