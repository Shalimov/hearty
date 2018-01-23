const AuthMutation = `
	input CredentialsInput {
		email: String!
		password: String!
	}

	type CreateTokenPayload {
		token: String!
		me: User
	}
`

module.exports = AuthMutation
