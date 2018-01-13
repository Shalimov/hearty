import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { toPx } from 'utils/styles'

const { unit } = measures

const arrowBox = {
	top: '100%',
	left: '50%',
	border: `solid ${colors.transparent}`,
	content: '" "',
	height: 0,
	width: 0,
	position: 'absolute',
	pointerEvents: 'none',
}

const styles = StyleSheet.create({
	tooltip: {
		display: 'inline-block',
		borderRadius: toPx(10),
		padding: `${2 * unit}px ${3 * unit}px`,
	},

	arrowBox: {
		position: 'relative',
		background: colors.white100,
		border: `1px solid ${colors.color1}`,
		
		':before': {
			...arrowBox,
			borderTopColor: colors.color1,
			borderWidth: toPx(2 * unit),
			marginLeft: toPx(-2 * unit),
		},

		':after': {
			...arrowBox,
			borderTopColor: colors.white100,
			borderWidth: toPx(2 * unit - 1),
			marginLeft: toPx(-2 * unit + 1),
		},
	},
})

export default styles