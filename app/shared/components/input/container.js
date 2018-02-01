import fp from 'lodash/fp'
import { withHandlers } from 'recompose'

import InputComponent from './component'

export default withHandlers({
	onInternalKeyDown: ({ onPressEnter, onKeyDown }) => (event) => {
		const ENTER_KEY = 13

		if (onPressEnter && !onKeyDown && event.keyCode === ENTER_KEY) {
			onPressEnter(event)
		}

		if (onKeyDown) {
			onKeyDown(event)
		}
	},

	onInternalChange: ({ debounce, onChange = fp.noop }) => {
		if (fp.isNumber(debounce)) {
			return fp.debounce(debounce, onChange)
		}

		return onChange
	},
})(InputComponent)
