const expressions = require('angular-expressions')
const moment = require('moment')
const fp = require('lodash/fp')

// const EMPTY_STRING = ''

// define your filter functions here, for example, to be able to write {clientname | lower}
expressions.filters.mapjoin = (collection, key, delimiter = ', ') => {
	if (!Array.isArray(collection)) {
		return collection
	}

	return fp.map(key, collection).join(delimiter)
}

expressions.filters.initials = (fullname) => {
	const [familyName, firstName, middleName] = fp.split(/\s+/, fullname)
	
	if (!(fp.isString(firstName) && fp.isString(middleName))) {
		return fullname
	}

	const firstLetter = fp.toUpper(firstName.charAt(0))
	const middleLetter = fp.toUpper(middleName.charAt(0))

	return `${fp.upperFirst(familyName)} ${firstLetter}.${middleLetter}.`
}

expressions.filters.date = (date, format) => {
	if (date) {
		return moment(date).format(format)
	}
}

expressions.filters.addDays = (date, days, format) => {
	if (date) {
		return moment(date).add(days, 'days').format(format)
	}
}

const customParser = tag => ({
	get: tag === '.' ? i => i : (s) => {
		const result = expressions.compile(tag.replace(/’/g, '\''))(s)
		return (result === '' || result == null) ? null : result
	},
})

module.exports = {
	customParser,
}
