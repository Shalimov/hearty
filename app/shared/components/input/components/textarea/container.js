import { compose, withHandlers, withState } from 'recompose'

import TextareaComponent from './component'

const smartTag = /\$(?:input|date)/g
const smartEnd = /(?:\$|\s)/g
const search = (str, regexp, pos = 0) => {
	const offset = str.substring(pos).search(regexp)
	return offset === - 1 ? -1 : offset + pos
}
const closeEndPosition = (str, pos = 0) => search(str, smartEnd, pos)

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
				const nextPosition = search(content, smartTag, textarea.selectionEnd)
				const fromStartPosition = search(content, smartTag)

				if (nextPosition !== -1) {
					textarea.selectionStart = nextPosition
					textarea.selectionEnd = closeEndPosition(content, nextPosition + 1)
				} else if (fromStartPosition !== -1) {
					textarea.selectionStart = fromStartPosition
					textarea.selectionEnd = closeEndPosition(content, fromStartPosition + 1)
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
