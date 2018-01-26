module.exports = {
	createToken(_, { input }, context) {
		const { authService } = context.services
		const { email, password } = input
		return authService.createToken(email, password)
	},
}
