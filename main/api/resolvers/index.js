module.exports = {
	Query: {
		me: (_obj, _args, context) => context.user,
	},

	// AuthMutation: {
	// 	createToken: (_, { email, password }) => ({
	// 		token: `api${email}${password}token`.toLowerCase(),
	// 	}),
	// },
}
