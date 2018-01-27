const api = require('../api')
const repository = require('../repo')

module.exports = {
	async init() {
		const repo = await repository.init()
		await api.init(repo)
	},
}
