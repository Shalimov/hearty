const AuthMutations = require('./auth')
const PatientMutations = require('./patient')
const EpicrisisMutations = require('./epicrisis')
const DictionaryMutations = require('./dictionary')

module.exports = {
	Mutation: Object.assign({}, ...[
		AuthMutations,
		PatientMutations,
		EpicrisisMutations,
		DictionaryMutations,
	]),
}
