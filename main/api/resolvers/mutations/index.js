const AuthMutations = require('./auth')
const EpicrisisMutations = require('./epicrisis')
const DictionaryMutations = require('./dictionary')
const AnalysisMutations = require('./analysis')
const MedicineGroupMutations = require('./medicine.group')

module.exports = {
	Mutation: Object.assign({}, ...[
		AuthMutations,
		AnalysisMutations,
		EpicrisisMutations,
		DictionaryMutations,
		MedicineGroupMutations,
	]),
}
