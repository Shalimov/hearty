import { colors } from 'styles/variables'

const dialogStyles = {
	content: {
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: 'none',
		bottom: 'none',
	},

	overlay: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black60,
		zIndex: 100,
	},
}

export { dialogStyles }

