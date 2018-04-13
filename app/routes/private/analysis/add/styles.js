import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(4 * unit),
		width: toPx(75 * unit),
	},
})

export default styles

