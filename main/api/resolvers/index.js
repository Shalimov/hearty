module.exports = {
	Query: {
		me: (_obj, _args, context) => context.user,
	},

	Mutation: {
		createToken: (_, { input }, context) => {
			const { authService } = context.services
			const { email, password } = input
			return authService.createToken(email, password)
		},
	},
}
