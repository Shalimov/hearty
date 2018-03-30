import { StyleSheet } from 'aphrodite'
import { font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	messageBox: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
		padding: toPx(unit),
	},

	buttonGroup: {
		textAlign: 'right',
	},

	buttonWrapper: {
		display: 'inline-block',
		marginLeft: toPx(unit),
	},
})

export default styles

