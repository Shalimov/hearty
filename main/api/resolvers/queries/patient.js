module.exports = {
	patient(_obj, { _id }, context) {
		const { patientService } = context.services
		return patientService.get(_id)
	},

	patients(_obj, { input }, context) {
		const { patientService } = context.services
		return patientService.query(input)
	},
}
