import { StyleSheet } from 'aphrodite'
import { toPx, toPr, tags } from 'utils/styles'
import { colors, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'

const { unit } = measures
const zIndex = 50

const styles = StyleSheet.create({
	dropdown: {
		...mixins.font(),
		position: 'relative',
		zIndex,
	},

	dropdownHeader: {
		...mixins.flexRow(),
		alignItems: 'center',
		backgroundColor: colors.transparent,
		padding: toPx(unit),
		cursor: 'pointer',
		outline: 'none',
		border: 'none',
	},

	dropdownHeaderActive: {
		backgroundColor: colors.white100,
		boxShadow: `0 1px 5px ${colors.black15}`,
	},

	dropdownList: {
		backgroundColor: colors.white100,
		position: 'absolute',
		boxShadow: `0 5px 5px ${colors.black15}`,
		width: toPr(100),
		zIndex,
	},

	dropdownSeparator: {
		borderBottom: `1px solid ${colors.color6}`,
	},

	dropdownItem: {
		cursor: 'pointer',
		padding: tags.px`${2 * unit} ${4 * unit}`,
		
		':hover': {
			borderBottom: `1px solid ${colors.color2}`,
			backgroundColor: colors.color5,
		},
	},
})

export default styles
