const smartMaskPattern = /\$\{.+\}/

const isSmartMask = text => {
	smartMaskPattern.lastIndex = 0
	return smartMaskPattern.test(text)
}

const isInputDenied = char => char !== '?'
const nextInputPosition = (text, [, end], currentPosition) => {
	const nextPosIndex = text.indexOf('?', currentPosition + 1)

	if (nextPosIndex === -1 || nextPosIndex > end) {
		return -1
	}

	return nextPosIndex
}

const getMaskRange = (text, inputPosition = 0) => {
	const START_MARKER = '${'
	const END_MARKER = '}'
	const startIndex = text.lastIndexOf(START_MARKER, inputPosition)

	if (startIndex === -1) {
		return null
	}

	const endIndex = text.indexOf(END_MARKER, inputPosition)

	if (endIndex === -1) {
		return null
	}

	return [
		startIndex + START_MARKER.length,
		endIndex,
	]
}

const maskEnvMeta = (text, inputPosition) => {
	const range = getMaskRange(text, inputPosition)

	if (!range) {
		return {
			range,
			isInsideRange: false,
			isInputDenied: false,
			nextInputPosition: -1,
			completed: true,
		}
	}

	const [start] = range
	const nextPosition = nextInputPosition(text, range, inputPosition)
	const hasNoEditableParts = nextPosition === -1 &&
		nextInputPosition(text, [start, inputPosition - 1], start) === -1

	return {
		range,
		isInsideRange: true,
		isInputDenied: isInputDenied(text.charAt(inputPosition)),
		nextInputPosition: nextPosition,
		completed: hasNoEditableParts,
	}
}

export {
	maskEnvMeta,
	isSmartMask,
}
