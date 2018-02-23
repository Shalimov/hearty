import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white100,
		padding: toPx(unit),
		userSelect: 'initial',
	},

	buttonWrapper: {
		textAlign: 'right',
		padding: toPx(unit),
	},
})

export default styles

