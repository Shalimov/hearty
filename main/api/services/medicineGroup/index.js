const BaseService = require('../base')

class MedicineGroupService extends BaseService {
	constructor(repository) {
		super(repository, 'medicineGroups')
	}

	static create(repository) {
		return new MedicineGroupService(repository)
	}

	toSearchQuery() {
		return {}
	}
}

module.exports = MedicineGroupService
