import { StyleSheet } from 'aphrodite'
import { font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(4 * unit),
	},

	buttonWrapper: {
		textAlign: 'right',
		padding: toPx(unit),
	},

	header: {
		...mixins.font({ size: font.font26, weight: font.weight.bold }),
		marginBottom: toPx(unit),
	},

	description: {
		...mixins.font({ size: font.font20, weight: font.weight.normal }),
		marginBottom: toPx(4 * unit),
	},

	searchPanel: {
		...mixins.flexRow(),
		marginBottom: toPx(3 * unit),
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

