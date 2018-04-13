import Ego from 'utils/validation'

export default ({ initialValues }) => ({
	field: {
		initialValue: initialValues.value,
		scheme: Ego.string(),
	},
})

export const mapping = [
	['field', 'value'],
]
