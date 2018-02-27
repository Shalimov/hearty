import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		alignItems: 'center',
		marginLeft: toPx(unit),
	},

	internalInput: {
		...mixins.font(),
		color: colors.color8,
		boxSizing: 'border-box',
		width: 'inherit',
		border: 0,
	},

	icon: {
		fontSize: font.font20,
		color: colors.black40,
	},
})

const dialogStyles = {
	content: {
		position: 'relative',
		left: 'auto',
		right: 'auto',
		top: toPx(20 * unit),
		bottom: 'none',
		overflow: 'visible',
		width: toPx(50 * unit),
		padding: 0,
	},

	overlay: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: colors.black60,
		zIndex: 100,
	},
}

export default styles
export { dialogStyles }

