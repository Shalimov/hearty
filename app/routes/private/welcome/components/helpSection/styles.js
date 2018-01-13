import { StyleSheet } from 'aphrodite'
import { toPx, tags } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { colors, font, measures } from 'styles/variables'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		flex: 1,
	},

	divider: {
		borderLeft: `1px solid ${colors.color1}`,
		margin: tags.px`0 ${(3 * unit)} ${unit}`,
	},

	descriptionColumn: {
		...mixins.flexColumn(),
		justifyContent: 'space-between',
	},

	descriptionBlock: {
		...mixins.font({ size: font.font16, weight: font.weight.normal }),
	},

	blockHeader: {
		fontSize: font.font22,
		fontWeight: font.weight.bold,
	},

	blockDescription: {
		marginTop: toPx(3 * unit),
	},
})

export default styles
