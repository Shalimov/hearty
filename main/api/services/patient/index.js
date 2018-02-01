const fp = require('lodash/fp')
const BaseService = require('../base')

class PatientService extends BaseService {
	constructor(repository) {
		super(repository, 'patients')
	}

	static create(repository) {
		return new PatientService(repository)
	}

	toSearchQuery(params) {
		if (!params.term) {
			return {}
		}

		const searchRegexString = fp.escapeRegExp(params.term)
		const searchRegex = new RegExp(searchRegexString, 'i')

		return {
			$or: [{
				fullname: searchRegex,
			}, {
				address: searchRegex,
			}],
		}
	}
}

module.exports = PatientService
