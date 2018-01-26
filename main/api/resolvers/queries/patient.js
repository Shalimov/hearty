module.exports = {
	patient(_obj, { id }, context) {
		const { patientService } = context.services
		return patientService.get(id)
	},

	patients(_obj, { input }, context) {
		const { patientService } = context.services
		return patientService.query(input)
	},
}
