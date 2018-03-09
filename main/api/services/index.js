const AuthService = require('./auth')
const UserService = require('./user')
const EpicrisisService = require('./epicrisis')
const DictionaryService = require('./dictionary')
const MedicineGroupService = require('./medicineGroup')
const bluebird = require('bluebird')
const fsns = require('fs')

// TODO: remove fake repo deps
const fakeRepo = require('../../repo/repo.mock')

module.exports = {
	init(repository) {
		const promisifiedFs = bluebird.promisifyAll(fsns)
		const fakeRepository = fakeRepo.createFakeRepository('epicrisis')

		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			dictionaryService: DictionaryService.create(repository),
			medicineGroupService: MedicineGroupService.create(repository),
			epicrisisService: EpicrisisService.create(fakeRepository, promisifiedFs),
		}
	},
}
