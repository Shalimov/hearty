const fp = require('lodash/fp')

module.exports = {
	createMedicineGroup(_, { input: group }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.create(fp.assign(group, { listOfMedicaments: [] }))
	},

	updateMedicineGroup(_, { input: group }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update(group)
	},

	removeMedicineGroup(_, { _id }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.remove(_id)
	},

	createMedicine(_, { _id, name }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update(
			{ _id },
			() => ({ $addToSet: { listOfMedicaments: { name } } })
		)
	},

	removeMedicine(_, { _id, name }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update(
			{ _id },
			() => ({ $pull: { listOfMedicaments: { name } } })
		)
	},
}
