import { compose, withHandlers, withState } from 'recompose'

import TextareaComponent from './component'

export default compose(
	withState('isExpanded', 'setMode', false),
	withHandlers({
		onInternalKeyDown: ({ setMode, expandable }) => (event) => {
			const KEY_F = 70
			if (expandable && event.ctrlKey && event.keyCode === KEY_F) {
				setMode(true)
			}
		},

		onInternalBlur: ({ onBlur, setMode }) => (event) => {
			setMode(false)

			if (onBlur) {
				onBlur(event)
			}
		},
	})
)(TextareaComponent)
