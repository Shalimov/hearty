const repo = require('../main/repo')
const seeds = require('../main/repo/seeds')
const log = require('../main/utils/logger')

repo.init().then(seeds.init)
	.then(() => {
		process.exit(0)
	}).catch((error) => {
		log.error(error)
		process.exit(1)
	})
