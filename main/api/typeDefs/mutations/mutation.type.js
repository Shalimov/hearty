const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
	}

	input CredentialsInput {
		email: String!
		password: String!
	}

	type CreateTokenPayload {
		token: String!
		me: User
	}
`

module.exports = [Mutation]
