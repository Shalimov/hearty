module.exports = {
	createMedicineGroup(_, { groupName }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.create({ groupName, listOfMedicaments: [] })
	},

	updateMedicineGroup(_, { _id, groupName }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update({ _id, groupName })
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
