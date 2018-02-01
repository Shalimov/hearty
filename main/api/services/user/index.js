const BaseService = require('../base')

class UserService extends BaseService {
	constructor(repository) {
		super(repository, 'users')
	}

	static create(repository) {
		return new UserService(repository)
	}

	toSearchQuery() {
		return {}
	}
}

module.exports = UserService
