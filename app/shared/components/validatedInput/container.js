import { withHandlers } from 'recompose'

import ValidatedInputComponent from './component'

export default withHandlers({
	onInternalChange: ({ field, onChange }) => (event) => {
		onChange && onChange(event)

		if (!event.defaultPrevented) {
			field.onChange(event)
		}
	},
})(ValidatedInputComponent)
