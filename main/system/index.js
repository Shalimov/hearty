
const api = require('../api')
const repository = require('../repo')
const uiLogListener = require('./ui.log.listener')

module.exports = {
	async init() {
		const repo = await repository.init()
		await api.init(repo)
		await uiLogListener.init()
	},
}
