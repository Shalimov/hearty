const Datastore = require('nedb')
const bluebird = require('bluebird')

module.exports = {
	init() {
		const db = {}

		const loadOrCreateCollection = (collectionName) => {
			const collection = new Datastore({
				filename: `${collectionName}.db`,
				timestampData: true,
			})

			bluebird.promisifyAll(collection)
			db[collectionName] = collection

			return collection.loadDatabaseAsync()
		}

		return Promise.all([
			loadOrCreateCollection('users'),
			loadOrCreateCollection('patients'),
		])
	},
}
