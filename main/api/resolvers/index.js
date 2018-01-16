module.exports = {
	Query: {
		me: (_obj, _args, context) => context.user,
	},

	Mutation: {
		createToken: (_, { email, password }, context) => {
			const { authService } = context.services
			return authService.createToken(email, password)
		},
	},
}
