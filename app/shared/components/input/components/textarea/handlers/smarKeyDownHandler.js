
import {
	isArrowLeft,
	isArrowRight,
	isArrowUpDown,
} from '../helpers'
import { maskEnvMeta } from '../mask.helpers'

const updateTextarea = (textarea, range) => {
	const content = textarea.value
	const [start, end] = range
	const innerContent = content.substring(start, end)
	const contentFirstPart = content.substring(0, start - 2) + innerContent
	const updatedContent = contentFirstPart + content.substring(end + 1)

	textarea.value = updatedContent
	textarea.selectionStart = textarea.selectionEnd = contentFirstPart.length
}

const delayedTextareaUpdate = (textarea, range) =>
	setImmediate(updateTextarea, textarea, range)

// TODO here is a POC
export const smartKeyDownHandler = (event, afterSmartTab) => {
	if (!afterSmartTab && event.ctrlKey) { return }

	const textarea = event.target
	const content = textarea.value
	const selection = afterSmartTab ?
		textarea.selectionStart + 1 :
		textarea.selectionEnd
	const {
		range,
		isInputDenied,
		isInsideRange,
		completed,
		nextInputPosition,
	} = maskEnvMeta(content, selection)

	if (!isInsideRange) { return }

	if (isArrowUpDown(event.key) || isArrowLeft(event.key)) {
		const correctedStartIndex = range[0] - 2
		textarea.selectionStart = textarea.selectionEnd = correctedStartIndex
		return
	} else if (isArrowRight(event.key)) {
		const endIndex = range[1]
		textarea.selectionStart = textarea.selectionEnd = endIndex
		return
	}

	if (!isInputDenied) {
		textarea.selectionEnd = textarea.selectionStart + 1

		if (completed) {
			delayedTextareaUpdate(textarea, range)
		}

		return
	}

	if (completed) {
		updateTextarea(textarea, range)
		return
	}

	if (nextInputPosition !== -1) {
		textarea.selectionStart = nextInputPosition
		textarea.selectionEnd = nextInputPosition + 1
	} else {
		const rangeEnd = range[1]
		const outOfRange = rangeEnd + 1
		textarea.selectionStart = textarea.selectionEnd = outOfRange
	}
}
