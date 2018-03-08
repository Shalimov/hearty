import { StyleSheet } from 'aphrodite'
import { measures } from 'styles/variables'
import { toPx, toVh } from 'utils/styles'

const { unit } = measures

const styles = StyleSheet.create({
	expandable: {
		height: toPx(12 * unit),
		transition: 'all .5s ease-out',
	},

	expandedArea: {
		height: toVh(50),
	},
})

export default styles

