const fp = require('lodash/fp')
const BaseService = require('../base')

const HASHTAG_PATTERN = /#\S+/g
const MULT_SPACES_PATTERN = /\s{2,}/g
const compactText = fp.flow(
	fp.replace(HASHTAG_PATTERN, ''),
	fp.replace(MULT_SPACES_PATTERN, ' '),
	fp.trim
)

class DictionaryService extends BaseService {
	constructor(repository) {
		super(repository, 'dictionary')
	}

	static create(repository) {
		return new DictionaryService(repository)
	}

	splitIntoTagsAndContent(text) {
		const tags = text.match(HASHTAG_PATTERN)

		return {
			tags: fp.map(fp.toLower, tags),
			content: compactText(text),
		}
	}

	toSearchQuery(params) {
		if (!params.term) {
			return {}
		}

		const searchRegexString = fp.escapeRegExp(params.term)
		const searchRegex = new RegExp(searchRegexString, 'i')

		return {
			term: searchRegex,
		}
	}
}

module.exports = DictionaryService
