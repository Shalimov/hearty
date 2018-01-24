export default {
	init(applicationStateStore) {
		applicationStateStore.init()
		return Promise.resolve(applicationStateStore)
	},
}
