import fp from 'lodash/fp'
import { withHandlers } from 'recompose'

import InputComponent from './component'

export default withHandlers({
	onInternalChange: ({ debounce, onChange = fp.noop }) => {
		if (fp.isNumber(debounce)) {
			return fp.debounce(debounce, onChange)
		}

		return onChange
	},
})(InputComponent)
