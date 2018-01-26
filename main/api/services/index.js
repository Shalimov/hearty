const AuthService = require('./auth')
const UserService = require('./user')
const PatientService = require('./patient')

module.exports = {
	create(repository) {
		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			patientService: PatientService.create(repository),
		}
	},
}
