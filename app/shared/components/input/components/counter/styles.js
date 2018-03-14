import { StyleSheet } from 'aphrodite'
import { colors, measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx, tags, darken } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	counterContainer: {
		...mixins.flexRow(),
		justifyContent: 'space-between',
		border: `1px solid ${colors.color1}`,
		borderRadius: '50px',
		alignItems: 'center',
		backgroundColor: colors.white40,
	},

	counterValue: {
		padding: tags.px`0 ${unit}`,
	},

	counterButton: {
		backgroundColor: colors.color1,
		borderRadius: toPx(50),
		borderStyle: 'solid',
		borderColor: colors.color3,
		cursor: 'pointer',
		outline: 'none',

		':hover': {
			backgroundColor: darken(colors.color1, 10),
		},
	},
})

export default styles

