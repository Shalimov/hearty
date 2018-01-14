const { ipcMain } = require('electron')
const { makeExecutableSchema } = require('graphql-tools')

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const GraphQLService = require('./service')
const GRAPHQL = require('../constants/graphql')
const log = require('../utils/logger')

module.exports = {
	init() {
		const executableSchema = makeExecutableSchema({ typeDefs, resolvers })
		const graphQLService = GraphQLService.create(executableSchema)

		ipcMain.on(GRAPHQL.NET, async (event, args) => {
			try {
				const message = await graphQLService.processRequest(args)
				event.sender.send(GRAPHQL.NET, message)
			} catch (err) {
				log.error(err)
			}
		})
	},
}

