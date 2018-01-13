import { StyleSheet } from 'aphrodite'
import { colors } from 'styles/variables'
import { mixins } from 'styles/mixins'

const styles = StyleSheet.create({
	container: {
		...mixins.flexRow(),
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: colors.black50,
	},

	fixed: {
		position: 'fixed',
	},

	absolute: {
		position: 'absolute',
	},
})

export default styles
