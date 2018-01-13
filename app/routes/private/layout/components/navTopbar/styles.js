import { StyleSheet } from 'aphrodite'
import { toPx, tags } from 'utils/styles'
import { colors, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		alignItems: 'center',
		backgroundColor: colors.white100,
		height: toPx(8 * unit),
		boxShadow: `0 1px 5px ${colors.black15}`,
		paddingLeft: toPx(3 * unit),
		paddingRight: toPx(3 * unit),
	},
	
	leftSection: {
		flex: 1,
	},

	rightSection: {
		flex: 1,
		...mixins.flexRow(),
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	userMenuContainer: {
		padding: tags.px`${2 * unit} ${3 * unit}`,
		verticalAlign: 'middle',
	},

	userMenuText: {
		...mixins.font(),
		color: colors.color8,
		verticalAlign: 'middle',
		marginRight: toPx(unit),
	},

	userMenuItemTitle: {
		color: colors.color8,
		marginLeft: toPx(2 * unit),
	},

	userMenuItemIcon: {
		color: colors.color7,
	},

	userMenuCaret: {
		color: colors.color2,
		marginLeft: toPx(unit),
	},

	icon: {
		color: colors.color5,
		verticalAlign: 'middle',
	},
})

export default styles
