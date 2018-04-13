import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(4 * unit),
	},

	headerWrapper: {
		...mixins.flexRow(),
		marginBottom: toPx(unit),
	},

	header: {
		...mixins.font({ size: font.font26, weight: font.weight.bold }),
	},

	description: {
		...mixins.font({ size: font.font20, weight: font.weight.normal }),
		marginBottom: toPx(4 * unit),
	},

	linkWrapper: {
		textAlign: 'right',
		margin: toPx(2 * unit),
	},

	icon: {
		fontSize: font.font24,
		color: colors.color2,
	},

	backIcon: {
		marginRight: toPx(unit),
	},
})

export default styles
