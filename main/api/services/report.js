// const Boom = require('boom')

class ReportService {
	constructor(repository) {
		this.repository = repository
	}

	static create(repository) {
		return new ReportService(repository)
	}
}

module.exports = ReportService
