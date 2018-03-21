const smartTagPattern = /\$(?:input|date|\{.+\})/g
const smartTagEndingPattern = /(?:\$|\s)/g

const search = (str, regexp, pos = 0) => {
	const offset = str.substring(pos).search(regexp)
	return offset === - 1 ? -1 : offset + pos
}

const hasSmartTag = (text) => { 
	smartTagPattern.lastIndex = 0
	return smartTagPattern.test(text)
}

const getSmartTagRange = (text, offset = 0) => {
	const tagStartPosition = search(text, smartTagPattern, offset)

	if (tagStartPosition !== -1) {
		const tagEndPosition = search(text, smartTagEndingPattern, tagStartPosition + 1)
		return [tagStartPosition, tagEndPosition]
	}

	return null
}

export {
	search,
	hasSmartTag,
	getSmartTagRange,
}
