import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	tablesList: {
		display: 'grid',
		gridTemplateColumns: tags.pr`${30} ${30} ${30}`,
		gridColumnGap: toPx(2 * unit),
		gridRowGap: toPx(2 * unit),
	},

	table: {
		borderCollapse: 'collapse',
		userSelect: 'none',
	},

	caption: {
		...mixins.font({ size: font.font18, weight: font.weight.bold }),
		border: `1px solid ${colors.color1}`,
		padding: toPx(2 * unit),
	},

	cell: {
		...mixins.font({ size: font.font14, weight: font.weight.normal }),
		border: `1px solid ${colors.color1}`,
		textAlign: 'left',
		verticalAlign: 'middle',
		padding: toPx(2 * unit),
		position: 'relative',
	},

	formLegend: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		marginBottom: toPx(6 * unit),
	},

	inputWrapper: {
		marginBottom: toPx(4 * unit),
	},

	buttonGroup: {
		marginRight: toPx(5 * unit),
		paddingTop: toPx(3 * unit),
	},

	buttonWrapper: {
		display: 'inline-block',
		marginRight: toPx(3 * unit),
	},
})

export default styles

