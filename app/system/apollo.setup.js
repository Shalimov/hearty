import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import IpcLink from 'services/graphql/ipc.link'

export default {
	init() {
		const client = new ApolloClient({
			link: new IpcLink(),
			cache: new InMemoryCache(),
		})

		return client
	},
}
