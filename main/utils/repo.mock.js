class FakeModel {
	constructor() {
		this.store = new Map()
	}

	insertAsync(data) {
		const preparedData = Object.assign({
			_id: (Date.now() + this.store.size).toString(),
		}, data)

		this.store.set(preparedData._id, preparedData)

		return Promise.resolve(preparedData)
	}

	findOneAsync({ _id }) {
		return Promise.resolve(this.store.get(_id))
	}
}

module.exports = {
	createFakeRepository(modelName) {
		return {
			[modelName]: new FakeModel(),
		}
	},
}
