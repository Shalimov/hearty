import { StyleSheet } from 'aphrodite'
import { toPx, toPr, tags } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { colors, measures } from 'styles/variables'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		alignItems: 'center',
		justifyContent: 'center',
		height: toPr(100),
	},

	formContainer: {
		border: `1px solid ${colors.color9}`,
		padding: tags.px`${3 * unit} ${7 * unit}`,
		borderRadius: toPx(6 * unit),
		backgroundColor: colors.white95,
	},
})

export default styles
