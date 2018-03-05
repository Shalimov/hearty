const AuthService = require('./auth')
const UserService = require('./user')
const PatientService = require('./patient')
const EpicrisisService = require('./epicrisis')
const DictionaryService = require('./dictionary')
const bluebird = require('bluebird')
const fsns = require('fs')

module.exports = {
	init(repository) {
		const promisifiedFs = bluebird.promisifyAll(fsns)

		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			patientService: PatientService.create(repository),
			epicrisisService: EpicrisisService.create(repository, promisifiedFs),
			dictionaryService: DictionaryService.create(repository),
		}
	},
}
