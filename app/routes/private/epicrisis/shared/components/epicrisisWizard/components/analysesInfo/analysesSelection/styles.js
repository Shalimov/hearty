import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	formLegend: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		marginBottom: toPx(6 * unit),
	},
	
	buttonGroup: {
		paddingTop: toPx(unit),
	},

	buttonWrapper: {
		display: 'inline-block',
		marginRight: toPx(2 * unit),
	},

	tablesGrid: {
		display: 'grid',
		gridTemplateColumns: tags.pr`${30} auto`,
		gridColumnGap: toPx(2 * unit),
		gridRowGap: toPx(2 * unit),
	},

	table: {
		borderCollapse: 'collapse',
		userSelect: 'none',
	},

	caption: {
		...mixins.font({ size: font.font18, weight: font.weight.bold }),
		border: `1px solid ${colors.color6}`,
		padding: toPx(2 * unit),
	},

	cell: {
		...mixins.font({ size: font.font14, weight: font.weight.normal }),
		border: `1px solid ${colors.color6}`,
		textAlign: 'left',
		verticalAlign: 'middle',
		padding: toPx(2 * unit),
		position: 'relative',
	},

	link: {
		color: colors.color2,
	},
})

export default styles

