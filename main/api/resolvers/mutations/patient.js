module.exports = {
	createPatient(_, { input: patient }, context) {
		const { patientService } = context.services
		return patientService.create(patient)
	},

	updatePatient(_, { input: patient }, context) {
		const { patientService } = context.services
		return patientService.update(patient)
	},
}
