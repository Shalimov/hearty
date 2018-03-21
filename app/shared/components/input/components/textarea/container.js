import { compose, withHandlers, withState } from 'recompose'

import {
	getSmartTagRange,
	hasSmartTag,
} from './helpers'
import { maskEnvMeta } from './mask.helpers'
import { smartKeyDownHandler } from './handlers/smarKeyDownHandler'
import TextareaComponent from './component'

export default compose(
	withState('isExpanded', 'setMode', false),
	withHandlers({
		onClick: () => (event) => {
			const textarea = event.target
			const content = textarea.value

			const {
				range,
				isInsideRange,
			} = maskEnvMeta(content, textarea.selectionEnd)

			if (isInsideRange) {
				textarea.selectionStart = textarea.selectionEnd = range[0]
			}
		},

		// TODO HERE IS HARDCORE) smart patterns is really heavy feature
		// to remove opaque behavior just remove smartKeyDownHandler & afterSmartTab variable
		onInternalKeyDown: ({ setMode, smartTab, expandable, onKeyDown }) => (event) => {
			const KEY_F = 70
			const KEY_TAB = 9
			let afterSmartTab = false

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
					afterSmartTab = true
				}
			}

			smartKeyDownHandler(event, afterSmartTab)
			afterSmartTab = false

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
