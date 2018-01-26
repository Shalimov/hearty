import { StyleSheet } from 'aphrodite'
import { font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: tags.px`${8 * unit} ${6 * unit}`,
	},

	header: {
		...mixins.font({ size: font.font30, weight: font.weight.bold }),
		marginBottom: toPx(4 * unit),
	},

	searchPanel: {
		...mixins.flexRow(),
		marginBottom: toPx(7 * unit),
	},

	searchButtonWrapper: {
		marginLeft: toPx(2 * unit),
	},

	controls: {
		textAlign: 'right',
	},

	buttonText: {
		marginLeft: toPx(8),
		verticalAlign: 'super',
	},
})

export default styles
