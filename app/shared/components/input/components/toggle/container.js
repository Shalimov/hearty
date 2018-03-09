import { compose, withHandlers } from 'recompose'

import ToggleComponent from './component'

export default compose(
	withHandlers({
		onInternalChange: ({ onChange }) => (event) => {
			onChange({ target: { value: event.target.checked }})
		},
	})
)(ToggleComponent)
