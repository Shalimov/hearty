const AuthService = require('./auth')
const UserService = require('./user')
const ReportService = require('./report')
const PatientService = require('./patient')
const DictionaryService = require('./dictionary')

module.exports = {
	init(repository) {
		return {
			authService: AuthService.create(repository),
			userService: UserService.create(repository),
			reportService: ReportService.create(repository),
			patientService: PatientService.create(repository),
			dictionaryService: DictionaryService.create(repository),
		}
	},
}
