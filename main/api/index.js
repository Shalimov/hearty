const { ipcMain } = require('electron')
const { makeExecutableSchema } = require('graphql-tools')

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const GraphQLProcessor = require('./processor')
const GRAPHQL = require('../constants/graphql')
const log = require('../utils/logger')

module.exports = {
	init(repository) {
		const defaultContext = Object.defineProperty({}, 'repository', {
			writable: false,
			value: repository,
		})

		const graphQLProcessor = GraphQLProcessor.create({
			schema: makeExecutableSchema({ typeDefs, resolvers }),
			context: defaultContext,
			middlewares: [],
		})

		ipcMain.on(GRAPHQL.NET, async (event, args) => {
			try {
				const message = await graphQLProcessor.processRequest(args)
				event.sender.send(GRAPHQL.NET, message)
			} catch (err) {
				log.error(err)
			}
		})
	},
}

