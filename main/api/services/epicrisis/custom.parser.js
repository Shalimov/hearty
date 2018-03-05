const expressions = require('angular-expressions')
const moment = require('moment')

// define your filter functions here, for example, to be able to write {clientname | lower}
expressions.filters.date = (date, format) => {
	if (date) {
		return moment(date).format(format)
	}
}

expressions.filters.plusDays = (date, days, format) => {
	if (date) {
		return moment(date).add(days, 'days').format(format)
	}
}

const customParser = (tag) => ({
	get: tag === '.' ? i => i : (s) => expressions.compile(tag.replace(/’/g, '\''))(s),
})

module.exports = {
	customParser,
}
