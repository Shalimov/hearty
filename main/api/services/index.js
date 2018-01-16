const AuthService = require('./auth')

module.exports = {
	create(repository) {
		return {
			authService: AuthService.create(repository),
		}
	},
}
