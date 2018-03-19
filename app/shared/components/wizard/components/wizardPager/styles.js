import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { toPx, tags } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	pager: {
		marginBottom: toPx(2 * unit),
	},

	pageIndicator: {
		display: 'inline-block',
		padding: toPx(unit),
		border: `1px solid ${colors.color6}`,
		borderRadius: toPx(50),
		marginRight: toPx(unit),
		cursor: 'default',
		position: 'relative',

		':hover:before': {
			display: 'none',
			border: 'solid',
			borderColor: `${colors.black30} transparent`,
			borderWidth: tags.px`${6} ${6} 0 ${6}`,
			bottom: toPx(30),
			content: '""',
			left: toPx(10),
			position: 'absolute',
			zIndex: 99,
		},

		':hover:after': {
			maxWidth: toPx(30 * unit),
			display: 'none',
			position: 'absolute',
			backgroundColor: colors.black30,
			color: colors.white100,
			borderRadius: toPx(unit),
			padding: toPx(unit),
			bottom: toPx(36),
			whiteSpace: 'nowrap',
			left: 0,
			zIndex: 99,
		},
	},

	selectable: {
		cursor: 'pointer',

		':hover:before': {
			display: 'initial',
		},

		':hover:after': {
			display: 'initial',
			content: 'attr(data-title)',
		},
	},

	current: {
		color: colors.white100,
		backgroundColor: colors.color2,
		transition: 'background-color 1s',
	},

	rest: {
		color: colors.white100,
		backgroundColor: colors.black15,
	},
})

export default styles

