const UserQuery = require('./user')
const AnalysisQuery = require('./analysis')
const DictionaryQuery = require('./dictionary')
const EpicrisisQuery = require('./epicrisis')
const MedicineGroupQuery = require('./medicine.group')

module.exports = {
	Query: Object.assign({}, ...[
		UserQuery,
		AnalysisQuery,
		EpicrisisQuery,
		DictionaryQuery,
		MedicineGroupQuery,
	]),
}
