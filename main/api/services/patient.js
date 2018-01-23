const Boom = require('boom')

class PatientService {
	constructor(repository) {
		this.repository = repository
	}

	static create(repository) {
		return new PatientService(repository)
	}

	create(patient) {
		const { patients } = this.repository
		return patients.insertAsync(patient)
	}

	get(id) {
		const { patients } = this.repository
		return patients.findOneAsync({ _id: id })
	}

	async update(patient) {
		const { patients } = this.repository

		if (!patient._id) {
			throw Boom.badData('Cannot find patient')
		}

		await patients.updateAsync({ _id: patient._id }, { $set: patient })
		return patient
	}

	async remove(id) {
		const { patients } = this.repository

		if (!id) {
			throw Boom.badData('Cannot find patient')
		}

		await patients.removeAsync({ _id: id })
	}
}

module.exports = PatientService
