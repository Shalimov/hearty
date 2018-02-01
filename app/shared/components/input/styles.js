import { StyleSheet } from 'aphrodite'
import { toPx, toPr } from 'utils/styles'
import { colors, measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit, half } = measures

const short = toPx(16 * unit)
const long = toPx(36 * unit)

const control = {
	...mixins.font(),
	color: colors.color8,
	boxSizing: 'border-box',
	minWidth: short,
	width: 'inherit',
	maxWidth: long,
	border: `1px solid ${colors.color1}`,
	outline: 'none',

	':disabled': {
		cursor: 'not-allowed',
		backgroundColor: colors.color9,
	},
}

const styles = StyleSheet.create({
	label: {
		...mixins.font({ size: font.font12, weight: font.weight.bold }),
		textTransform: 'uppercase',
		display: 'block',
		marginBottom: toPx(half),
	},

	inputWrapper: {
		position: 'relative',
		display: 'inline-block',
		width: toPr(100),
	},

	input: {
		...control,
		padding: toPx(unit),
	},

	strictShort: {
		width: short,
	},

	strictLong: {
		width: long,
	},

	strictHigh: {
		padding: toPx(unit + half),
	},

	flexible: {
		width: 'inherit',
		maxWidth: 'inherit',
	},

	inputError: {
		backgroundColor: colors.errorColor1,
	},

	errorContainer: {
		...mixins.font({ size: font.font14, weight: font.weight.bold }),
		color: colors.errorColor2,
		bottom: toPx(6 * unit),
		width: 'inherit',
		maxWidth: long,
	},

	select: {
		...control,
		backgroundColor: colors.white100,
	},
})

export default styles
export { short, long }
