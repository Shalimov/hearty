import { colors, measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const dialogStyles = {
	content: {
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'none',
		bottom: 'none',
		width: toPx(50 * unit),
		overflow: 'visible',
	},

	overlay: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black60,
		zIndex: 50,
	},
}

export { dialogStyles }
