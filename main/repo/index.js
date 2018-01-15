const fp = require('lodash/fp')
const Datastore = require('nedb')
const bluebird = require('bluebird')

module.exports = {
	init() {
		const loadOrCreateCollection = async (collectionName) => {
			const collection = new Datastore({
				filename: `${collectionName}.db`,
				timestampData: true,
			})

			bluebird.promisifyAll(collection)

			await collection.loadDatabaseAsync()

			return [collectionName, collection]
		}

		return Promise.all([
			loadOrCreateCollection('users'),
			loadOrCreateCollection('patients'),
		]).then(fp.fromPairs)
	},
}
