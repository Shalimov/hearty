module.exports = {
	Query: {
		me: () => Promise.resolve({
			id: 'q23A!wS23sazqX!',
			username: 'admin_account',
			email: 'system@gmail.com',
		}),
	},

	// AuthMutation: {
	// 	createToken: (_, { email, password }) => ({
	// 		token: `api${email}${password}token`.toLowerCase(),
	// 	}),
	// },
}
