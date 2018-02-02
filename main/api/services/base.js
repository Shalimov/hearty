const fp = require('lodash/fp')
const Boom = require('boom')

class BaseService {
	constructor(repository, modelName) {
		this.repository = repository
		this.model = repository[modelName]
	}

	toSearchQuery() {
		throw new Error('Should be reimplemented in derivied Models')
	}

	sortByCreteria() {
		return { createdAt: -1 }
	}

	create(data) {
		return this.model.insertAsync(data)
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
			.sort(this.sortByCreteria())
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
			page: Math.floor(params.skip / params.limit),
			content,
		}
	}

	async update(instance, updateFunc) {
		if (!instance._id) {
			throw Boom.badData('Cannot find record')
		}

		const changes = fp.isFunction(updateFunc) ? updateFunc() : { $set: fp.omit(['_id'], instance) }

		await this.model.updateAsync({ _id: instance._id }, changes)
		return instance
	}

	async remove(id) {
		if (!id) {
			throw Boom.badData('Cannot find record to remove')
		}

		const record = await this.get(id)
		await this.model.removeAsync({ _id: id })

		return record
	}
}

module.exports = BaseService
