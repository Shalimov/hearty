import { StyleSheet } from 'aphrodite'
import { colors } from 'styles/variables'
import { mixins } from 'styles/mixins'

const styles = StyleSheet.create({
	row: {
		...mixins.flexRow(),
		height: 'inherit',
		width: 'inherit',
	},

	column: {
		...mixins.flexColumn(),
		height: 'inherit',
		width: 'inherit',
	},

	innerView: {
		flex: 1,
		position: 'relative',
		backgroundColor: colors.color9,
		overflowY: 'auto',
	},
})

export default styles
