const UserQuery = require('./user')
const DictionaryQuery = require('./dictionary')
const EpicrisisQuery = require('./epicrisis')

module.exports = {
	Query: Object.assign({}, ...[
		UserQuery,
		EpicrisisQuery,
		DictionaryQuery,
	]),
}
