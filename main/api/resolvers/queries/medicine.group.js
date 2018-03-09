module.exports = {
	medicineGroup(_obj, { _id }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.get(_id)
	},

	medicineGroups(_obj, { input }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.query(input)
	},
}
