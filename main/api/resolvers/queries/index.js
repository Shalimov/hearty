const UserQuery = require('./user')
const PatientQuery = require('./patient')
const DictionaryQuery = require('./dictionary')

module.exports = {
	Query: Object.assign({}, ...[
		UserQuery,
		PatientQuery,
		DictionaryQuery,
	]),
}
