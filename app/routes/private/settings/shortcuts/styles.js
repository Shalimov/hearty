import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(4 * unit),
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
		width: toPx(80 * unit),
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

	buttonCellBox: {
		display: 'inline-block',
		padding: tags.px`0 ${unit}`,
	},

	noPadding: {
		padding: 0,
	},

	centrized: {
		textAlign: 'center',
	},

	addButtonContent: {
		display: 'block',
		padding: toPx(unit),

		':hover': {
			backgroundColor: colors.white50,
		},

		':active': {
			backgroundColor: colors.black10,
		},
	},
})

export default styles

