import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		// TODO: 100% mb not necessary
		width: toPx(85 * 8),
		padding: toPx(6 * unit),
	},
})

export default styles

