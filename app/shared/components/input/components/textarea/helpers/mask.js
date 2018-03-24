const smartMaskPattern = /\$\{.+\}/
const PLACEHOLDER = '?'

const isSmartMask = text => {
	smartMaskPattern.lastIndex = 0
	return smartMaskPattern.test(text)
}

const isInputDenied = char => char !== PLACEHOLDER
const nextInputPosition = (text, [, end], currentPosition) => {
	const nextPosIndex = text.indexOf(PLACEHOLDER, currentPosition + 1)

	if (nextPosIndex === -1 || nextPosIndex > end) {
		return -1
	}

	return nextPosIndex
}

const prevInputPosition = (text, [start], currentPosition) => {
	const prevPosIndex = text.lastIndexOf(PLACEHOLDER, currentPosition)

	if (prevPosIndex === -1 || prevPosIndex < start) {
		return -1
	}

	return prevPosIndex
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

	const closestStartMarker = text.lastIndexOf(START_MARKER, endIndex)

	if (startIndex !== closestStartMarker) {
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
			prevInputPosition: -1,
			completed: true,
		}
	}

	const [start] = range
	const nextPosition = nextInputPosition(text, range, inputPosition)
	const prevPosition = prevInputPosition(text, range, inputPosition)
	const hasNoEditableParts = nextPosition === -1 &&
		nextInputPosition(text, [start, inputPosition - 1], start) === -1

	return {
		range,
		isInsideRange: true,
		isInputDenied: isInputDenied(text.charAt(inputPosition)),
		nextInputPosition: nextPosition,
		prevInputPosition: prevPosition,
		completed: hasNoEditableParts,
	}
}

export {
	maskEnvMeta,
	isSmartMask,
}
