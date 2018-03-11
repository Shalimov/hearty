const BaseService = require('../base')

class AnalysisService extends BaseService {
	constructor(repository) {
		super(repository, 'analyses')
	}

	static create(repository) {
		return new AnalysisService(repository)
	}

	toSearchQuery() {
		return {}
	}
}

module.exports = AnalysisService
