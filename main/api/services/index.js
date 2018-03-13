const AuthService = require('./auth')
const UserService = require('./user')
const AnalysisService = require('./analysis')
const EpicrisisService = require('./epicrisis')
const DictionaryService = require('./dictionary')
const MedicineGroupService = require('./medicineGroup')
const bluebird = require('bluebird')
const fsns = require('fs')

module.exports = {
	init(repository) {
		const promisifiedFs = bluebird.promisifyAll(fsns)

		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			analysisService: AnalysisService.create(repository),
			dictionaryService: DictionaryService.create(repository),
			medicineGroupService: MedicineGroupService.create(repository),
			epicrisisService: EpicrisisService.create(repository, promisifiedFs),
		}
	},
}
