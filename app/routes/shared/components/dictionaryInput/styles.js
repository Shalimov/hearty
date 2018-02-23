import { StyleSheet } from 'aphrodite'
import { colors, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const styles = StyleSheet.create({
	link: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
		color: colors.black100,
		textDecoration: 'none',
	},
})

export default styles

