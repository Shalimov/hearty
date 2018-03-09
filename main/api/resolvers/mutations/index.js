const AuthMutations = require('./auth')
const EpicrisisMutations = require('./epicrisis')
const DictionaryMutations = require('./dictionary')

module.exports = {
	Mutation: Object.assign({}, ...[
		AuthMutations,
		EpicrisisMutations,
		DictionaryMutations,
	]),
}
