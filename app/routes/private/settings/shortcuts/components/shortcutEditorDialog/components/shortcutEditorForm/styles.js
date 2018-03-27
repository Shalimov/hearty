import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	legend: {
		...mixins.font(),
		marginBottom: toPx(2 * unit),
	},

	inputWrapper: {
		marginBottom: toPx(2 * unit),
	},
	
	buttons: {
		textAlign: 'right',
	},
})

export default styles

