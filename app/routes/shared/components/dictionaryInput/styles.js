import { StyleSheet } from 'aphrodite'
import { font } from 'styles/variables'
import { mixins } from 'styles/mixins'

const styles = StyleSheet.create({
	contextMenuContainer: {
		width: 'inherit',
	},
	
	text: {
		...mixins.font({ size: font.font16, weight: font.weight.bold }),
	},
})

export default styles

