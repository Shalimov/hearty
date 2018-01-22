import { StyleSheet } from 'aphrodite'
import { toPx } from 'utils/styles'
import { measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit } = measures

const styles = StyleSheet.create({
	formLabel: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		marginBottom: toPx(6 * unit),
	},

	inputWrapper: {
		marginBottom: toPx(4 * unit),
	},
})

export default styles
