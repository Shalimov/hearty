const fp = require('lodash/fp')
const Datastore = require('nedb')
const bluebird = require('bluebird')

const seeds = require('./seeds')

module.exports = {
	async init() {
		const loadOrCreateCollection = async (collectionName) => {
			const collection = new Datastore({
				filename: `/dbs/${collectionName}.db`,
				timestampData: true,
			})

			bluebird.promisifyAll(collection)

			await collection.loadDatabaseAsync()

			return [collectionName, collection]
		}

		const repository = await Promise.all([
			loadOrCreateCollection('users'),
			loadOrCreateCollection('patients'),
		]).then(fp.fromPairs)

		await seeds.init(repository)

		return repository
	},
}
