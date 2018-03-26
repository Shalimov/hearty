import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, toPr } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(6 * unit),
	},

	header: {
		...mixins.font({ size: font.font26, weight: font.weight.bold }),
		marginBottom: toPx(unit),
	},

	caption: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
		border: `1px solid ${colors.color1}`,
		padding: toPx(unit),
	},

	table: {
		borderCollapse: 'collapse',
		width: toPr(100),
		marginTop: toPx(3 * unit),
	},

	headerCell: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
	},

	cell: {
		...mixins.font(),
		border: `1px solid ${colors.color1}`,
		padding: toPx(unit),
	},
})

export default styles

