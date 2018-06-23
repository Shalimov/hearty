import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	image: {
		height: 'inherit',
		width: 'inherit',
	},

	small: {
		height: toPx(20 * unit),
		width: toPx(20 * unit),
	},
})

export default styles
