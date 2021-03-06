const fp = require('lodash/fp')
const fs = require('fs-extra')
const path = require('path')
const JSZip = require('jszip')
const moment = require('moment')
const Docxtemplater = require('docxtemplater')

const { customParser } = require('./custom.parser')
const { TEMPLATE_DIR, PROCESSED_TEMPLATE_DIR } = require('../../../constants/system')

// TODO: move out to self-service
const generateDocument = async (templateName, epircirisData) => {
	const ext = path.extname(templateName)
	const templatePath = path.join(TEMPLATE_DIR, templateName)
	const content = await fs.readFile(templatePath, 'binary')

	const zip = new JSZip(content)
	const doc = new Docxtemplater()

	doc.loadZip(zip)

	doc.setOptions({
		parser: customParser,
		paragraphLoop: true,
		nullGetter() {
			return ''
		},
	})
	doc.setData(fp.omit(['bookmarks'], epircirisData))

	doc.render()

	const dataBuffer = doc.getZip().generate({ type: 'nodebuffer' })

	const created = moment().format('D-M-Y-H-m-s')
	const filepath = `${PROCESSED_TEMPLATE_DIR}/${epircirisData.patient.fullname}-${created}${ext}`

	await fs.outputFile(filepath, dataBuffer)

	return filepath
}

module.exports = {
	generateDocument,
}
