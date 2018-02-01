const AuthMutations = require('./auth')
const PatientMutations = require('./patient')
const DictionaryMutations = require('./dictionary')

module.exports = {
	Mutation: Object.assign({}, ...[
		AuthMutations,
		PatientMutations,
		DictionaryMutations,
	]),
}
