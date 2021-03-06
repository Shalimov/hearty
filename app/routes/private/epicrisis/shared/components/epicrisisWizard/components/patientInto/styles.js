import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, toPr } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	form: {
		width: toPx(85 * unit),
	},

	rows: {
		...mixins.flexRow(),
		justifyContent: 'flex-start',
	},

	block: {
		flex: 1,
		padding: toPx(2 * unit),
	},

	formLegend: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		width: toPr(100),
		borderBottom: `1px solid ${colors.color1}`,
		paddingBottom: toPx(2 * unit),
		marginBottom: toPx(2 * unit),
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

