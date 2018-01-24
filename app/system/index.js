import ApplicationStateStore from 'store'

import storeSetup from './store.setup'
import appoloSetup from './apollo.setup'
import momentSetup from './moment.setup'

export default {
	// Enforce it returns promise cuz it can be helpfull in future
	async init() {
		const applicationStateStore = ApplicationStateStore.create()
		const apolloClient = appoloSetup.init(applicationStateStore)

		momentSetup.init()
		return storeSetup.init(applicationStateStore)
			.then(() => [
				applicationStateStore,
				apolloClient,
			])
	},
}
