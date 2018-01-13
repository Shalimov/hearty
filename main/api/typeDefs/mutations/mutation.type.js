const AuthMutation = require('./auth.mutation.type')

const Mutation = `
	union Mutation = AuthMutation
`

module.exports = [Mutation, AuthMutation]
