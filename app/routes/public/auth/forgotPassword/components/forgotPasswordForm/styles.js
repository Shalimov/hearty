import { StyleSheet } from 'aphrodite'
import { toPx } from 'utils/styles'
import { mixins } from 'styles/mixins'
import { measures } from 'styles/variables'

const { unit } = measures
const styles = StyleSheet.create({
	form: {
		flexGrow: 2,
		...mixins.flexColumn(),
		justifyContent: 'space-between',
	},

	buttonGroup: {
		textAlign: 'right',
	},

	linkButton: {
		marginRight: toPx(2 * unit),
	},
})

export default styles
