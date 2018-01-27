const fp = require('lodash/fp')
const fs = require('fs')
const path = require('path')
const Datastore = require('nedb')
const bluebird = require('bluebird')

const log = require('../utils/logger')

const createDatabaseDirectory = () => {
	try {
		const dbsPath = path.join(process.cwd(), '/dbs')
		if (!fs.existsSync(dbsPath)) {
			fs.mkdirSync(dbsPath)
		}
	} catch (err) {
		log.error(err)
	}
}

module.exports = {
	async init() {
		createDatabaseDirectory()

		const loadOrCreateCollection = async (collectionName) => {
			const collection = new Datastore({
				filename: `${process.cwd()}/dbs/${collectionName}.db`,
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

		return repository
	},
}
