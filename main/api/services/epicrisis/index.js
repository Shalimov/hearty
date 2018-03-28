const fp = require('lodash/fp')
const { shell } = require('electron')

const { generateDocument } = require('./generate.doc')
const BaseService = require('../base')
const { TEMPLATE_DIR, PROCESSED_TEMPLATE_DIR } = require('../../../constants/system')

const EXT_PATTERN = /(?:\.docx?)$/i

class EpicrisisService extends BaseService {
	constructor(repository, fs) {
		super(repository, 'epicrises')
		this.fs = fs
	}

	static create(repository, fs) {
		return new EpicrisisService(repository, fs)
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
		return this.fs.readdir(TEMPLATE_DIR, { encoding: 'utf8' })
			.then(fp.filter(EpicrisisService.isDoc))
	}

	async printEpicrisis(_id, epicrisisTemplate) {
		const epicrisis = await this.get(_id)
		const resultDocFilepath = await generateDocument(epicrisisTemplate, epicrisis)

		shell.openItem(resultDocFilepath)
	}

	async openEpicrisesFolder() {
		await this.fs.ensureDir(PROCESSED_TEMPLATE_DIR)
		shell.openItem(PROCESSED_TEMPLATE_DIR)
	}
}

module.exports = EpicrisisService
