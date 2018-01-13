import { StyleSheet } from 'aphrodite'
import { measures, font } from 'styles/variables'
import { mixins } from 'styles/mixins'
import { toPx } from 'utils/styles'
import { long } from 'shared/components/input/styles'

const { unit } = measures

const styles = StyleSheet.create({
	fieldset: {
		marginBottom: toPx(8 * unit),
	},

	row: {
		...mixins.flexRow(),
		justifyContent: 'space-between',
	},

	section: {
		flex: 1,
		marginRight: toPx(2 * unit),
	},

	legend: {
		...mixins.font({ size: font.font18, weight: font.weight.bold }),
	},

	inputFlatGroup: {
		...mixins.flexRow(),
		marginTop: toPx(3 * unit),
		maxWidth: long,
	},

	inputFlatGroupMarginRight: {
		marginRight: toPx(3 * unit),
	},

	inputWrapper: {
		marginTop: toPx(3 * unit),
	},

	buttonGroup: {
		textAlign: 'right',
		marginRight: toPx(5 * unit),
		paddingTop: toPx(6 * unit),
	},

	buttonWrapper: {
		display: 'inline-block',
		marginRight: toPx(3 * unit),
	},
})

export default styles
