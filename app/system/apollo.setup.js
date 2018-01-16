import { ApolloClient } from 'apollo-client'
import { ApolloLink, from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import IpcLink from 'graphql/ipc.link'

export default {
	init(applicationStateStore) {
		const tokenGrabMiddleware = new ApolloLink((operation, forward) => {
			operation.setContext(({ headers = {} }) => ({
				headers: {
					...headers,
					authorization: applicationStateStore.authToken,
				},
			}))

			return forward(operation)
		})

		const client = new ApolloClient({
			link: from([tokenGrabMiddleware, new IpcLink()]),
			cache: new InMemoryCache(),
		})

		return client
	},
}
