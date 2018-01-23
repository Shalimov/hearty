const AuthService = require('./auth')
const PatientService = require('./patient')

module.exports = {
	create(repository) {
		return {
			authService: AuthService.create(repository),
			patientService: PatientService.create(repository),
		}
	},
}
