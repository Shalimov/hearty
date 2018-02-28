const fp = require('lodash/fp')
const BaseService = require('../base')

class DictionaryService extends BaseService {
	constructor(repository) {
		super(repository, 'dictionary')
	}

	static create(repository) {
		return new DictionaryService(repository)
	}

	toSearchQuery(params) {
		if (!params.term) {
			return {}
		}

		const searchRegexString = fp.escapeRegExp(params.term)
		const searchRegex = new RegExp(searchRegexString, 'i')

		return {
			$or: [{
				term: searchRegex,
			}, {
				'subTerms.term': searchRegex,
			}],
		}
	}
}

module.exports = DictionaryService
