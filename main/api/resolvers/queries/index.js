const UserQuery = require('./user')
const DictionaryQuery = require('./dictionary')
const EpicrisisQuery = require('./epicrisis')
const MedicineGroupQuery = require('./medicine.group')

module.exports = {
	Query: Object.assign({}, ...[
		UserQuery,
		EpicrisisQuery,
		DictionaryQuery,
		MedicineGroupQuery,
	]),
}
