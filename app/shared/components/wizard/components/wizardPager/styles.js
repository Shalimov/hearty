import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	pager: {
		...mixins.flexRow(),
		alignItems: 'center',
		marginBottom: toPx(2 * unit),
	},

	pageIndicator: {
		display: 'inline-block',
		padding: toPx(unit),
		border: `1px solid ${colors.color6}`,
		borderRadius: toPx(50),
		marginRight: toPx(unit),
		cursor: 'default',
	},

	selectionEnabled: {
		cursor: 'pointer',
	},

	current: {
		color: colors.white100,
		backgroundColor: colors.color2,
	},

	rest: {
		color: colors.white100,
		backgroundColor: colors.black15,
	},
})

export default styles

