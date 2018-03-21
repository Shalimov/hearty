const smartMaskPattern = /\$\{.+\}/

const isSmartMask = text => {
	smartMaskPattern.lastIndex = 0
	return smartMaskPattern.test(text)
}

const isInputDenied = char => char !== '@'
const nextInputPosition = (text, [, end], currentPosition) => {
	const nextPosIndex = text.indexOf('@', currentPosition + 1)

	if (nextPosIndex === -1 || nextPosIndex > end) {
		return -1
	}

	return nextPosIndex
}

const getMaskStartEndRange = (text, inputPosition) => {
	const { length } = text
	const bracketsChecker = []
	let startPosition = inputPosition
	let endPosition = inputPosition

	const isStartPosition = (text, startPosition) => {
		return text.charAt(startPosition) === '$' && text.charAt(startPosition + 1) === '{'
	}
	const isItEndPosition = (text, endPosition) => text.charAt(endPosition) === '}'

	do {
		if (isStartPosition(text, startPosition)) {
			break
		}

		if (text.charAt(startPosition) === '{') {
			bracketsChecker.push(startPosition)
		}

		startPosition -= 1
	} while (startPosition >= 0)

	do {
		if (isItEndPosition(text, endPosition)) {
			bracketsChecker.push(endPosition)
			break
		}

		endPosition += 1
	} while (endPosition < length)


	if (bracketsChecker.length > 2 || startPosition < 0 || endPosition >= length) {
		return null
	}


	return [startPosition, endPosition + 1]
}

const maskEnvMeta = (text, inputPosition) => {
	const range = getMaskStartEndRange(text, inputPosition)

	if (!range) {
		return {
			range,
			isInsideRange: false,
			isInputDenied: false,
			nextInputPosition: -1,
		}
	}

	return {
		range,
		isInsideRange: true,
		isInputDenied: isInputDenied(text.charAt(inputPosition)),
		nextInputPosition: nextInputPosition(text, range, inputPosition),
	}
}

export {
	maskEnvMeta,
	isSmartMask,
}
