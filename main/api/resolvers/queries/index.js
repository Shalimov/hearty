const UserQuery = require('./user')
const PatientQuery = require('./patient')
const DictionaryQuery = require('./dictionary')
const EpicrisisQuery = require('./epicrisis')

module.exports = {
	Query: Object.assign({}, ...[
		UserQuery,
		PatientQuery,
		EpicrisisQuery,
		DictionaryQuery,
	]),
}
