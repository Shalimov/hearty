module.exports = {
	Query: {
		me: () => Promise.resolve({
			id: 1,
			email: 'system@gmail.com',
			firstName: 'Admin',
			lastName: 'System',
		}),
	},

	AuthMutation: {
		createToken: (_, { email, password }) => ({
			token: `api${email}${password}token`.toLowerCase(),
		}),
	},
}
