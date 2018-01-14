const { graphql } = require('graphql')

class GraphQLService {
	constructor(schema, middlewares = []) {
		this.schema = schema

		middlewares.push(this.completeQuery.bind(this))

		this.processor = GraphQLService.createProcessor(middlewares)
	}

	static createProcessor(middlewares) {
		return {
			run(data) {
				const context = {}
				const queue = middlewares.slice()

				const next = (error) => {
					if (error) {
						return Promise.reject(error)
					}
	
					const middleware = queue.shift()

					if (middleware) {
						return middleware(data, context, next)
					}
				}
	
				return next()
			},
		}
	}

	static create(schema, ...middlewares) {
		return new GraphQLService(schema, middlewares)
	}

	processRequest(data) {
		return this.processor.run(data)
	}

	async completeQuery({ id, payload }, context) {
		const res = await this.executeQuery(payload, context)
		return this.generateMessage(id, res)
	}

	generateMessage(id, response) {
		return {
			id,
			payload: response,
		}
	}

	executeQuery(payload, context) {
		const { query, variables, operationName } = payload

		return graphql(
			this.schema,
			query,
			null,
			context,
			variables,
			operationName
		)
	}
}

module.exports = GraphQLService
