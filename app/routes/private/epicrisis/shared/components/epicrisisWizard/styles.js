import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	epicrisisContainer: {
		width: toPx(85 * unit),
		padding: tags.px`${2 * unit} ${6 * unit}`,
	},
})

export default styles

