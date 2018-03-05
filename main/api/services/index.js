const AuthService = require('./auth')
const UserService = require('./user')
const PatientService = require('./patient')
const EpicrisisService = require('./epicrisis')
const DictionaryService = require('./dictionary')
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
			patientService: PatientService.create(repository),
			epicrisisService: EpicrisisService.create(fakeRepository, promisifiedFs),
			dictionaryService: DictionaryService.create(repository),
		}
	},
}
