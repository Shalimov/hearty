import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	confirmQuestionHeader: {
		...mixins.font({ size: font.font20, weight: font.weight.bold }),
	},

	confirmButtonGroup: {
		marginTop: toPx(3 * unit),
		textAlign: 'right',
	},

	confirmButtonWrapper: {
		display: 'inline-block',
		marginRight: toPx(unit),
	},
})

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

export default styles
export { dialogStyles }

