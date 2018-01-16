import ApplicationStateStore from 'store'

import storeSetup from './store.setup'
import appoloSetup from './apollo.setup'

export default {
	// Enforce it returns promise cuz it can be helpfull in future
	async init() {
		const applicationStateStore = ApplicationStateStore.create()
		const apolloClient = appoloSetup.init(applicationStateStore)

		// TODO: Think how to improve initialistion step
		return Promise.all([
			// axiosSetup.init(),
			// interceptorsSetup.init(applicationStateStore),
		]).then(() => storeSetup.init(applicationStateStore))
			.then(() => [
				applicationStateStore,
				apolloClient,
			])
	},
}
