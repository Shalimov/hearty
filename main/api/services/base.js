const Boom = require('boom')

class BaseService {
	constructor(repository, modelName) {
		this.repository = repository
		this.model = repository[modelName]
	}

	toSearchQuery() {
		throw new Error('Should be reimplemented in derivied Models')
	}

	create(patient) {
		return this.model.insertAsync(patient)
	}

	get(id) {
		return this.model.findOneAsync({ _id: id })
	}

	execCursor(cursor) {
		return new Promise((resolve, reject) => {
			cursor.exec((err, docs) => {
				if (err) {
					reject(err)
				} else {
					resolve(docs)
				}
			})
		})
	}

	async query(params) {
		const { model } = this
		const query = this.toSearchQuery(params)
		const findCursor = model.find(query)
			.sort({ _id: -1 })
			.skip(params.skip)
			.limit(params.limit)

		const [totalCount, content] = await Promise.all([
			model.countAsync(query),
			this.execCursor(findCursor),
		])

		return {
			totalPages: Math.ceil(totalCount / params.limit),
			totalCount,
			pageSize: params.limit,
			content,
		}
	}

	async update(instance) {
		if (!instance._id) {
			throw Boom.badData('Cannot find record')
		}

		await this.model.updateAsync({ _id: instance._id }, { $set: instance })
		return instance
	}

	async remove(id) {
		if (!id) {
			throw Boom.badData('Cannot find record to remove')
		}

		await this.model.removeAsync({ _id: id })
	}
}

module.exports = BaseService
