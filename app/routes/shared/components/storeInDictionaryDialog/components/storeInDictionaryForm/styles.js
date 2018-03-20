import { StyleSheet } from 'aphrodite'
import { font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	formLegend: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		marginBottom: toPx(6 * unit),
	},

	inputWrapper: {
		marginBottom: toPx(4 * unit),
	},

	buttonGroup: {
		paddingTop: toPx(unit),
	},

	buttonWrapper: {
		display: 'inline-block',
		marginRight: toPx(2 * unit),
	},
})

export default styles

