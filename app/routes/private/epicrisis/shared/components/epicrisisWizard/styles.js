import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	epicrisisContainer: {
		width: toPx(85 * unit),
		padding: toPx(6 * unit),
	},
})

export default styles

