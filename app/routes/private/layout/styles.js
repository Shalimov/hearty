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
		background: colors.gradients.color1,
		overflowX: 'hidden',		
		overflowY: 'auto',
	},
})

export default styles
