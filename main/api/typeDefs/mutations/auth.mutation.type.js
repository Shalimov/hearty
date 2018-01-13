const Mutation = `
	input CredentialsInput {
		email: String!
		password: String!
	}

	type TokenResult {
		token: String!
	}

	type AuthMutation {
		createToken(input: CredentialsInput): TokenResult
	}
`

module.exports = Mutation
