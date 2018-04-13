import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(4 * unit),
	},

	header: {
		...mixins.font({ size: font.font26, weight: font.weight.bold }),
		marginBottom: toPx(unit),
	},

	description: {
		...mixins.font({ size: font.font20, weight: font.weight.normal }),
		marginBottom: toPx(4 * unit),
	},

	controls: {
		...mixins.flexRow(),
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	linkWrapper: {
		textAlign: 'right',
		margin: toPx(2 * unit),
		display: 'inline-block',
	},

	icon: {
		fontSize: font.font24,
		color: colors.color2,
	},
})

export default styles

