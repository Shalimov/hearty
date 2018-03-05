const fp = require('lodash/fp')

const { generateDocument } = require('./generate.doc')
const transformEpicrisis = require('./transform.epicrisis')
const BaseService = require('../base')
const { TEMPLATE_DIR } = require('../../../constants/system')

const EXT_PATTERN = /(?:\.docx?)$/i
class EpicrisisService extends BaseService {
	constructor(repository, promisifiedFs) {
		super(repository, 'epicrisis')
		this.fs = promisifiedFs
	}

	static create(repository, promisifiedFs) {
		return new EpicrisisService(repository, promisifiedFs)
	}

	static isDoc(value) {
		return EXT_PATTERN.test(value)
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
			.then(fp.filter(EpicrisisService.isDoc))
	}

	async printEpicrisis(_id, epicrisisTemplate) {
		const epicrisis = await this.get(_id)
			.then(transformEpicrisis)
			
		await generateDocument(epicrisisTemplate, epicrisis)
	}
}

module.exports = EpicrisisService
