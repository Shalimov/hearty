const fp = require('lodash/fp')
const { shell } = require('electron')

const { generateDocument } = require('./generate.doc')
const BaseService = require('../base')
const { TEMPLATE_DIR } = require('../../../constants/system')

const EXT_PATTERN = /(?:\.docx?)$/i

class EpicrisisService extends BaseService {
	constructor(repository, promisifiedFs) {
		super(repository, 'epicrises')
		this.fs = promisifiedFs
	}

	static create(repository, promisifiedFs) {
		return new EpicrisisService(repository, promisifiedFs)
	}

	static isDoc(value) {
		return EXT_PATTERN.test(value)
	}

	sortByCreteria() {
		return { 'patient.departureAt': -1 }
	}

	toSearchQuery(params) {
		if (!params.term) {
			return {}
		}

		const searchRegexString = fp.escapeRegExp(params.term)
		const searchRegex = new RegExp(searchRegexString, 'i')

		return {
			'patient.fullname': searchRegex,
		}
	}

	queryTemplates() {
		return this.fs.readdirAsync(TEMPLATE_DIR, { encoding: 'utf8' })
			.then(fp.filter(EpicrisisService.isDoc))
	}

	async printEpicrisis(_id, epicrisisTemplate) {
		const epicrisis = await this.get(_id)
		const resultDocFilepath = await generateDocument(epicrisisTemplate, epicrisis)

		shell.openItem(resultDocFilepath)
	}
}

module.exports = EpicrisisService
