import { StyleSheet } from 'aphrodite'
import { toPx, toPr, darken } from 'utils/styles'
import { colors, measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit, half } = measures

const short = toPx(16 * unit)
const long = toPx(36 *  unit)

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
		...mixins.font(),
		color: colors.color8,
		boxSizing: 'border-box',
		padding: toPx(unit),
		minWidth: short,
		width: 'inherit',
		maxWidth: long,
		border: `1px solid ${colors.color1}`,
		outline: 'none',

		':disabled': {
			cursor: 'not-allowed',
			backgroundColor: colors.color9,
		},
	},

	strictShort: {
		width: short,
	},

	strictLong: {
		width: long,
	},

	inputError: {
		backgroundColor: colors.errorColor1,
	},

	errorContainer: {
		color: darken(colors.color1, 50),
		position: 'absolute',
		textAlign: 'center',
		bottom: toPx(6 * unit),
		left: 0,
		right: 0,
		width: 'inherit',
		maxWidth: long,
	},
})

export default styles
export { short, long }
