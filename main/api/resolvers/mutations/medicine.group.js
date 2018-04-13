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

	createMedicine(_, { input: medicineInput }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update(
			{ _id: medicineInput._gid },
			() => ({
				$addToSet: {
					listOfMedicaments: {
						_id: medicineGroupService.createId(),
						name: medicineInput.name,
						prescription: medicineInput.prescription,
					},
				},
			})
		)
	},

	async updateMedicine(_, { input: medicineInput }, context) {
		const { medicineGroupService } = context.services
		const group = await medicineGroupService.get(medicineInput._gid)
		const medicamentListUpdater = fp.flow(
			fp.prop('listOfMedicaments'),
			fp.reject({ _id: medicineInput._id }),
			fp.concat({
				_id: medicineInput._id,
				name: medicineInput.name,
				prescription: medicineInput.prescription,
			})
		)

		return medicineGroupService.update({ _id: group._id }, {
			listOfMedicaments: medicamentListUpdater(group),
		})
	},

	removeMedicine(_, { _gid, _id }, context) {
		const { medicineGroupService } = context.services
		return medicineGroupService.update(
			{ _id: _gid },
			() => ({ $pull: { listOfMedicaments: { _id } } })
		)
	},
}
