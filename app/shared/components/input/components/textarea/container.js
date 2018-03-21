import { compose, withHandlers, withState } from 'recompose'

import { getSmartTagRange, hasSmartTag } from './helpers'
import TextareaComponent from './component'

export default compose(
	withState('isExpanded', 'setMode', false),
	withHandlers({
		onInternalKeyDown: ({ setMode, smartTab, expandable, onKeyDown }) => (event) => {
			const KEY_F = 70
			const KEY_TAB = 9

			if (expandable && event.ctrlKey && event.keyCode === KEY_F) {
				setMode(true)
			}

			if (smartTab && event.ctrlKey && event.keyCode === KEY_TAB) {
				const textarea = event.target
				const content = textarea.value

				if (hasSmartTag(content)) {
					const [start, end] = getSmartTagRange(content, textarea.selectionEnd) ||
						getSmartTagRange(content)

					textarea.selectionStart = start
					textarea.selectionEnd = end
				}
			}

			onKeyDown(event)
		},

		onInternalBlur: ({ onBlur, setMode }) => (event) => {
			setMode(false)

			if (onBlur) {
				onBlur(event)
			}
		},
	})
)(TextareaComponent)
