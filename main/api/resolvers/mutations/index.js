const AuthMutations = require('./auth')
const EpicrisisMutations = require('./epicrisis')
const DictionaryMutations = require('./dictionary')
const MedicineGroupMutations = require('./medicine.group')

module.exports = {
	Mutation: Object.assign({}, ...[
		AuthMutations,
		EpicrisisMutations,
		DictionaryMutations,
		MedicineGroupMutations,
	]),
}
