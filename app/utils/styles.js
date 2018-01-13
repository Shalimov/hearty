import fp from 'lodash/fp'
import Color from 'color'

// # Internal Helpers

const toAlpha = p => (p < 100 ? `0.${p}` : '1')
const sequence = (from, to, step) => {
	const values = []
	
	for (let i = from; i <= to; i += step) {
		values.push(i)
	}

	return values
}

const join = (strings, joiner) => {
	const joinResult = []

	if (strings.lighten < 2) {
		return strings.join('')
	}

	for (let i = 0, joinsCount = (strings.length - 1); i < joinsCount; i += 1) {
		joinResult.push(strings[i] + joiner(i))
	}

	joinResult.push(fp.last(strings))

	return joinResult.join('')
}

const createPointTag = point => (strings, ...args) => join(strings, i => point(args[i]))

// # External Helpers

export const lighten = (color, percent) => Color(color).lighten(percent / 100).toString()
export const darken = (color, percent) => Color(color).darken(percent / 100).toString()

export const toPx = (value) => `${value}px`
export const toPr = (value) => `${value}%`
export const toVh = (value) => `${value}vh`
export const toVw = (value) => `${value}vw`
export const toEm = (value) => `${value}em`

export const createPalette = (colorName, r, g, b) => fp.flow(
	fp.times(i => 5 * (i + 1)),
	fp.map(fp.padCharsStart('0', 2)),
	fp.map(percent => [`${colorName}${percent}`, `rgba(${r}, ${g}, ${b}, ${toAlpha(percent)})`]),
	fp.fromPairs
)

export const createFontSizes = (from, to, step, toPoints = toPx) => fp.flow(
	fp.map(size => [`font${size}`, toPoints(size)]),
	fp.fromPairs
)(sequence(from, to, step))


export const tags = {
	px: createPointTag(toPx),
	pr: createPointTag(toPr),
}
