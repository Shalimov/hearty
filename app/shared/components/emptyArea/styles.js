import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		...mixins.font({ size: font.font18, weight: font.weight.normal }),
		alignItems: 'center',
		padding: toPx(4 * unit),
		border: `1px solid ${colors.color1}`,
		borderRadius: toPx(50),
		backgroundColor: colors.white50,
	},
	
	icon: {
		fontSize: font.font24,
	},

	messagebox: {
		marginLeft: toPx(unit),
	},
})

export default styles

