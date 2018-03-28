const AuthService = require('./auth')
const UserService = require('./user')
const AnalysisService = require('./analysis')
const EpicrisisService = require('./epicrisis')
const DictionaryService = require('./dictionary')
const MedicineGroupService = require('./medicineGroup')
const fs = require('fs-extra')

module.exports = {
	init(repository) {
		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			analysisService: AnalysisService.create(repository),
			dictionaryService: DictionaryService.create(repository),
			medicineGroupService: MedicineGroupService.create(repository),
			epicrisisService: EpicrisisService.create(repository, fs),
		}
	},
}
