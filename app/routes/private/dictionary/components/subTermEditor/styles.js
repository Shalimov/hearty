import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white40,
		padding: toPx(unit),
		userSelect: 'initial',
	},

	buttonWrapper: {
		textAlign: 'right',
		padding: toPx(unit),
	},

	tagsLine: {
		...mixins.font({ size: font.font12, weight: font.weight.bold }),
		color: colors.color2,
	},
})

export default styles

