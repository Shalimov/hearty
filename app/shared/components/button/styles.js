import { StyleSheet } from 'aphrodite'
import { toPx, toPr, lighten, darken } from 'utils/styles'
import { colors, measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit, half } = measures

const styles = StyleSheet.create({
	btn: {
		...mixins.font({ size: font.font14, weight: font.weight.bold }),
		backgroundColor: colors.color2,
		border: `1px solid ${colors.color2}`,
		color: colors.white100,
		cursor: 'pointer',
		outline: 'none',

		':hover': {
			backgroundColor: lighten(colors.color2, 10),
		},

		':disabled': {
			backgroundColor: darken(colors.color2, 20),
			cursor: 'default',
		},
	},

	tiny: {
		padding: `${half}px ${unit}px`,
	},

	small: {
		padding: `${unit + half}px ${3 * unit}px`,
	},

	medium: {
		padding: `${unit + half}px ${3 * unit}px`,
	},

	large: {
		padding: `${unit + half}px ${3 * unit}px`,
	},

	fullbox: {
		width: toPr(100),
	},

	wrapper: {
		padding: 0,
		border: 'none',
		backgroundColor: colors.transparent,

		':hover': {
			backgroundColor: colors.transparent,
		},
	},

	long: {
		paddingLeft: toPx(6 * unit),
		paddingRight: toPx(6 * unit),
	},

	rounded: {
		borderRadius: toPx(50),
	},

	white: {
		backgroundColor: colors.white100,
		border: 'none',
		color: colors.color4,

		':hover': {
			backgroundColor: colors.white95,
			border: 'none',
		},
	},

	outlined: {
		backgroundColor: colors.transparent,
		color: colors.color2,

		':hover': {
			color: colors.white100,
		},
	},

	transparent: {
		border: 'none',
		backgroundColor: colors.transparent,
		color: colors.color2,
		
		':hover': {
			backgroundColor: colors.transparent,
			color: darken(colors.color2, 20),
		},
	},

	iconed: {
		border: 'none',
		backgroundColor: colors.transparent,
		color: 'inherit',
		padding: 0,
		
		':hover': {
			backgroundColor: colors.transparent,
		},

		':disabled': {
			backgroundColor: colors.transparent,
			color: colors.color3,
			cursor: 'not-allowed',
		},
	},
})

export default styles
