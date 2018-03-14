import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	epicrisisContainer: {
		width: toPx(85 * unit),
		padding: toPx(6 * unit),
	},

	pager: {
		...mixins.flexRow(),
		alignItems: 'center',
		marginBottom: toPx(2 * unit),
	},

	pageIndicator: {
		display: 'inline-block',
		padding: toPx(unit),
		border: `1px solid ${colors.color2}`,
		borderRadius: toPx(50),
		marginRight: toPx(unit),
		cursor: 'default',
	},

	current: {
		color: colors.white100,
		backgroundColor: colors.color2,
	},
})

export default styles

