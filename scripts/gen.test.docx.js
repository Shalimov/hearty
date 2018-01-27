const fs = require('fs')
const fp = require('lodash/fp')
const path = require('path')
const JSZip = require('jszip')
const Chance = require('chance')
const bluebird = require('bluebird')
const Docxtemplater = require('docxtemplater')
const moment = require('moment')

const log = require('../main/utils/logger')

const chance = new Chance()
const pfs = bluebird.promisifyAll(fs)

const genFakeReportData = () => ({
	reportNumber: chance.zip(),
	reportDate: moment().format('DD/MM/YYYY'),
	fullname: chance.name({ middle: true }),
	birthdate: moment(chance.birthday()).format('DD/MM/YYYY'),
	region: chance.city(),
	address: chance.address(),
	testResults: fp.times(() => ({
		label: chance.tv(),
		value: chance.normal(),
	}), 20),
})

const genTestDoc = async (reportData) => {
	try {
		const baseDocs = path.resolve(__dirname + '/../docs/')
		const content = await pfs.readFileAsync(`${baseDocs}/template.test.docx`, 'binary')

		const zip = new JSZip(content)
		const doc = new Docxtemplater()

		doc.loadZip(zip)

		doc.setData(reportData)

		doc.render()

		const buf = doc.getZip().generate({ type: 'nodebuffer' })

		await fs.writeFileAsync(`${baseDocs}/output.docx`, buf)
	} catch (error) {
		log.error(error)
	}

	process.exit(0)
}

genTestDoc(genFakeReportData())
