const repo = require('../public/main/repo')
const seeds = require('../public/main/repo/seeds')
const log = require('../public/main/utils/logger')

const afterExtractHook = async (buildPath, elVers, platform, arch, callback) => {
	await repo.init().then(seeds.init).catch((error) => {
		log.error(error)
	})

	callback()
}

module.exports = afterExtractHook
