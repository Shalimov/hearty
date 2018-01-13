import { StyleSheet } from 'aphrodite'
import { toVw, toVh, toPx } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { colors, measures } from 'styles/variables'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
	},

	imageContainer: {
		width: toVw(60),
		height: toVh(100),
		...mixins.clearfix(),
	},

	signinContainer: {
		...mixins.flexRow(),
		alignItems: 'center',
		justifyContent: 'center',
		width: toVw(40),
		overflow: 'auto',
	},

	formContainer: {
		width: toPx(45 * unit),
		marginBottom: toPx(3 * unit),
	},

	linkBoxWrapper: {
		whiteSpace: 'nowrap',
	},

	link: {
		...mixins.font(),
		color: colors.color8,
	},

	linkDelimiter: {
		margin: `0 ${toPx(unit)}`,
	},
})

export default styles
