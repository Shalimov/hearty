import { StyleSheet } from 'aphrodite'
import { colors, font, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	controls: {
		...mixins.flexRow(),
	},

	link: {
		color: colors.color4,
	},

	icon: {
		fontSize: font.font20,
		padding: tags.px`0 ${unit}`,
	},
})

export default styles
