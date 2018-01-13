import { types, flow, applySnapshot, getSnapshot } from 'mobx-state-tree'

export const createMappableSection = (fieldName, modelName, Type, service) => {
	return types.model({
		[`${fieldName}UpdatedAt`]: types.maybe(types.Date),
		[fieldName]: types.optional(types.map(Type), {}),
	}).actions(self => ({
		[`load${modelName}s`]: () => {
			// return service.query(params)
			throw new Error('Not Implemented')
		},

		[`loadOne${modelName}`]: flow(function* (id) {
			const data = yield service.get(id)
			const instance = Type.create(data)

			if (self[fieldName].has(id)) {
				applySnapshot(self[fieldName].get(id), getSnapshot(instance))
			} else {
				self[fieldName].set(id, instance)
			}

			self[`${fieldName}UpdatedAt`] = Date.now()

			return instance
		}),

		[`create${modelName}`]: flow(function* (modelData) {
			const storedData = yield service.create(modelData)
			const instance = Type.create(storedData)

			self[fieldName].set(instance.id, instance)

			self[`${fieldName}UpdatedAt`] = Date.now()

			return instance
		}),

		[`delete${modelName}`]: flow(function* (id) {
			yield service.delete(id)
			self[fieldName].delete(id)

			self[`${fieldName}UpdatedAt`] = Date.now()

			return self
		}),
	}))
}
