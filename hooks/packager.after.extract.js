const fs = require('fs-extra')
const { resolve } = require('path')

const afterExtractHook = async (buildPath, elVers, platform, arch, callback) => {
	const docsDir = resolve(__dirname, '../docs')
	const dbsDir = resolve(__dirname, '../dbs')

	try {
		await Promise.all([
			fs.move(docsDir, `${buildPath}/docs`),
			fs.move(dbsDir, `${buildPath}/dbs`),
		])
		callback()
	} catch (err) {
		callback(err)
	}
}

module.exports = afterExtractHook
