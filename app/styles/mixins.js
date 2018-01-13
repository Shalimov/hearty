import { font } from './variables'

export const mixins = {
	flexRow() {
		return {
			display: 'flex',
			flexDirection: 'row',
		}
	},

	flexColumn() {
		return {
			display: 'flex',
			flexDirection: 'column',
		}
	},

	font({ weight, size } = { 
		weight: font.weight.normal, 
		size: font.font14, 
	}) {
		return {
			fontFamily: 'Raleway',
			fontSize: size,
			fontWeight: weight,
		}
	},

	clearfix() {
		return {
			':after': {
				content: '""',
				display: 'table',
				clear: 'both',
			},
		}
	},
}
