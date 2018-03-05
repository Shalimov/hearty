const fp = require('lodash/fp')

const BaseService = require('../base')
const { TEMPLATE_DIR } = require('../../../constants/system')

class EpicrisisService extends BaseService {
	constructor(repository, promisifiedFs) {
		super(repository, 'epicrisis')
		this.fs = promisifiedFs
	}

	static create(repository) {
		return new EpicrisisService(repository)
	}

	toSearchQuery(params) {
		if (!params.term) {
			return {}
		}

		const searchRegexString = fp.escapeRegExp(params.term)
		const searchRegex = new RegExp(searchRegexString, 'i')

		return {
			fullname: searchRegex,
		}
	}

	queryTemplates() {
		return this.fs.readdirAsync(TEMPLATE_DIR, { encoding: 'utf8' })
	}

	printEpicrisis() {
		throw new Error('Not implemented')
	}
}

module.exports = EpicrisisService
