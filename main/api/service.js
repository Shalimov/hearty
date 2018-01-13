const { graphql } = require('graphql')

class GraphQLService {
	constructor(schema) {
		this.schema = schema
	}

	static create(schema) {
		return new GraphQLService(schema)
	}

	async processRequest({ id, payload }) {
		const res = await this.executeQuery(payload)
		return this.generateMessage(id, res)
	}

	generateMessage(id, response) {
		return {
			id,
			payload: response,
		}
	}

	executeQuery(payload) {
		const { query, variables, operationName } = payload

		return graphql(
			this.schema,
			query,
			null,
			this,
			variables,
			operationName
		)
	}
}

module.exports = GraphQLService
