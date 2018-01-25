const Query = require('./queries/query.type')
const Mutation = require('./mutations/mutation.type')

const SchemaDefinition = `
	scalar Date

	schema {
		query: Query
		mutation: Mutation
	} 
`

module.exports = [
	SchemaDefinition,
	...Mutation,
	...Query,
]
