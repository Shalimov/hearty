import { StyleSheet } from 'aphrodite'
import { toPx, tags } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { colors, font, measures } from 'styles/variables'

const { unit } = measures

const styles = StyleSheet.create({
	container: {
		padding: toPx(6 * unit),
	},

	header: {
		...mixins.font({ size: font.font30, weight: font.weight.bold }),
	},

	description: {
		...mixins.font({ size: font.font22, weight: font.weight.bold }),
		margin: tags.px`${6 * unit} 0 ${4 * unit}`,
	},

	row: {
		...mixins.flexRow(),
	},

	flexFill: {
		flex: 1,
	},

	column: {
		...mixins.flexColumn(),
	},

	divider: {
		borderTop: 'none',
		borderColor: colors.color1,
		borderWidth: toPx(1),
	},

	apiPicBox: {
		...mixins.flexRow(),
		...mixins.font({ size: font.font110, weight: font.weight.extraLight }),
		alignItems: 'flex-end',
		height: toPx(22 * unit),
	},

	apiPicBoxV: {
		fontSize: font.font60,
		lineHeight: 'normal',
		color: colors.color7,
	},

	apiPicBoxNum: {
		color: colors.color2,
	},

	apiDescription: {
		...mixins.font({ size: font.font16, weight: font.weight.normal }),
		width: toPx(77 * unit),
		marginLeft: toPx(6 * unit),
		lineHeight: toPx(3 * unit),
		letterSpacing: toPx(0.5),
	},

	nthRow: {
		marginTop: toPx(10 * unit),
	},
})

export default styles
