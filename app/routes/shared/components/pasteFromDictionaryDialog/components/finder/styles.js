import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const containerSize = 50 * unit

const styles = StyleSheet.create({
	container: {
		width: toPx(containerSize),
		overflow: 'hidden',
	},

	menuWrapper: {
		...mixins.flexRow(),
		width: toPx(2 * containerSize),
		position: 'relative',
		right: 0,
		transition: 'right 1s',
		minHeight: toPx(10 * unit),
	},

	submenuWrapper: {
		...mixins.flexRow(),
		flex: 1,
	},

	backButton: {
		fontSize: font.font16,
		backgroundColor: colors.transparent,
		border: 'none',
		borderRight: `1px solid ${colors.color1}`,
		cursor: 'pointer',
		outline: 'none',

		':hover': {
			backgroundColor: colors.color1,
		},

		':active': {
			backgroundColor: colors.color7,
		},
	},

	isActive: {
		transition: 'right 1s',
		right: toPx(containerSize),
	},

	menu: {
		listStyle: 'none',
		flex: 1,
	},

	menuItem: {
		padding: toPx(unit),
		cursor: 'pointer',

		':hover': {
			backgroundColor: colors.color1,
		},
	},

	mainMenuItem: {
		...mixins.flexRow(),
		justifyContent: 'space-between',
	},

	submenuItem: {
		':hover:before': {
			content: 'attr(data-hint)',
		},
	},

	previewListInactive: {
		backgroundColor: colors.color1,
	},

	previewList: {
		listStyle: 'none',
		flex: 1,

		':last-child': {
			borderBottom: `1px solid ${colors.color1}`,
		},
	},

	emptyBlock: {
		flex: 1,
		textAlign: 'center',
		padding: toPx(2 * unit),
	},

	loaderLimits: {
		width: toPx(containerSize),
	},
})

export default styles

