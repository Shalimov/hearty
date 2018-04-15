import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	link: {
		color: colors.color4,
	},

	icon: {
		fontSize: font.font20,
		padding: tags.px`0 ${unit}`,
	},
})

export default styles

