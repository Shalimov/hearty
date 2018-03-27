const { ipcMain } = require('electron')
const { makeExecutableSchema } = require('graphql-tools')

const { verifyToken, retrieveUser } = require('./middlewares/auth')
const servicesFactory = require('./services')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const GraphQLProcessor = require('./processor')
const GRAPHQL = require('../constants/graphql')
const log = require('../utils/logger')

module.exports = {
	init(repository) {
		const services = servicesFactory.init(repository)

		const graphQLProcessor = GraphQLProcessor.create({
			schema: makeExecutableSchema({ 
				typeDefs,
				resolvers,
				logger: { log: (error) => { log.error(error) } }, 
			}),
			context: { repository, services },
			middlewares: [verifyToken, retrieveUser],
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

