import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(unit),
	},

	buttonWrapper: {
		textAlign: 'right',
		padding: toPx(unit),
	},
})

export default styles

