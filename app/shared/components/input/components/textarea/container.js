import { Simulate } from 'react-dom/test-utils'
import { compose, withHandlers, withState } from 'recompose'
import { withHotkeys } from 'shared/hocs'

import {
	getSmartTagRange,
	hasSmartTag,
} from './helpers'
import { maskEnvMeta } from './helpers/mask'
import { smartKeyDownHandler } from './handlers/smarKeyDownHandler'
import TextareaComponent from './component'

// TODO: mb it worth to move out in utils
const putAt = (str, substr, spos, epos = spos) => {
	const firstPart = str.substring(0, spos)
	const lastPart = str.substring(epos)
	return `${firstPart}${substr}${lastPart}`
}

const DEFINED_PASTE_ACTION = 'DEFINED_PASTE'
const NEXT_OCCURENCE_ACTION = 'NEXT_OCCURENCE'

export default compose(
	withState('isExpanded', 'setExpandedMode', false),
	withHotkeys('textarea', {
		onExpandArea: ({ setExpandedMode }) => {
			setExpandedMode(true)
		},

		onNextOccurence: (props, params, event) => {
			const textarea = event.target
			const content = textarea.value

			if (hasSmartTag(content)) {
				const [start, end] = getSmartTagRange(content, textarea.selectionEnd) ||
					getSmartTagRange(content)

				textarea.selectionStart = start
				textarea.selectionEnd = end
			}

			return NEXT_OCCURENCE_ACTION
		},

		onDefinedPaste: (props, params, event) => {
			const textarea = event.target
			const content = textarea.value
			const startPos = textarea.selectionStart
			const endPos = textarea.selectionEnd
			const substrLength = params.value.length

			const newContent = putAt(content, params.value, startPos, endPos)

			textarea.value = newContent
			textarea.selectionStart = textarea.selectionEnd = startPos + substrLength

			Simulate.change(textarea)

			event.preventDefault()
			event.stopPropagation()

			return DEFINED_PASTE_ACTION
		},
	}),
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
		onInternalKeyDown: ({ onKeyDown, onHotkey }) => (event) => {
			const actionName = onHotkey(event)
			if (actionName === DEFINED_PASTE_ACTION) {
				return
			}

			const afterNextOccurence = actionName === NEXT_OCCURENCE_ACTION
			smartKeyDownHandler(event, afterNextOccurence)

			onKeyDown(event)
		},

		onInternalBlur: ({ onBlur, setExpandedMode }) => (event) => {
			setExpandedMode(false)

			if (onBlur) {
				onBlur(event)
			}
		},
	})
)(TextareaComponent)
