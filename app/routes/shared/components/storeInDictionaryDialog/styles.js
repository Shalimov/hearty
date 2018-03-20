import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(unit),
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

