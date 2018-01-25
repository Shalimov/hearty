const ScalarDate = require('./scalars/date')

module.exports = Object.assign({
	Query: {
		me(_obj, _args, context) {
			return context.user
		},

		patient(_obj, { id }, context) {
			const { patientService } = context.services
			return patientService.get(id)
		},
	},

	Mutation: {
		createToken(_, { input }, context) {
			const { authService } = context.services
			const { email, password } = input
			return authService.createToken(email, password)
		},

		createPatient(_, { input: patient }, context) {
			const { patientService } = context.services
			return patientService.create(patient)
		},

		updatePatient(_, { input: patient }, context) {
			const { patientService } = context.services
			return patientService.update(patient)
		},
	},
}, ScalarDate)
