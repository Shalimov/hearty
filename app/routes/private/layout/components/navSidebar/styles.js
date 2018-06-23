import { StyleSheet } from 'aphrodite'
import { toPx, toPr, tags, lighten } from 'utils/styles'
import { colors, measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit } = measures

const menuPaddingSize = 4 * unit

// TODO: Fix styles here, pretify them and refine
const styles = StyleSheet.create({
	container: {
		...mixins.flexColumn(),
		justifyContent: 'space-between',
		background: colors.gradients.color2,
		width: toPx(32 * unit),
	},

	imageContainer: {
		padding: toPx(2 * unit),
		textAlign: 'center',
	},

	menu: {
		padding: toPx(menuPaddingSize),
		color: colors.white100,
		listStyle: 'none',
	},

	menuItem: {
		...mixins.font({ size: font.font14, weight: font.weight.normal }),
	},

	menuItemPsudoLink: {
		...mixins.font({ size: font.font14, weight: font.weight.normal }),
		...mixins.flexRow(),
		justifyContent: 'space-between',
		width: toPr(100),
		padding: tags.px`${2 * unit} 0 0`,
		color: colors.white100,
		backgroundColor: colors.transparent,
		border: 'none',
		outline: 'none',
		cursor: 'pointer',
	},

	menuCollapsableOpen: {
		marginBottom: toPx(2 * unit),
	},

	menuItemLink: {
		display: 'block',
		color: colors.white100,
		textDecoration: 'none',
		paddingTop: toPx(2 * unit),
		paddingBottom: toPx(2 * unit),
	},

	menuItemLeftIcon: {
		color: colors.white100,
	},

	menuItemLinkActive: {
		color: lighten(colors.color2, 50),
	},

	menuItemTitle: {
		marginLeft: toPx(unit),
	},

	menuPaddingRemoval: {
		marginTop: toPx(2 * unit),
		marginLeft: toPx(-menuPaddingSize),
		marginRight: toPx(-menuPaddingSize),
	},

	submenuLink: {
		color: colors.color7,
	},

	collapsableContent: {
		backgroundColor: colors.color10,
		padding: tags.px`0 ${6 * unit} ${unit}`,
	},
})

export default styles
