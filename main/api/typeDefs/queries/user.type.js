const User = `
	type User {
		_id: ID!
		email: String!
		username: String!
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

module.exports = User
