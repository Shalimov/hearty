module.exports = {
	createEpicrisis(_obj, { input: epicrisis }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.create(epicrisis)
	},

	updateEpicrisis(_obj, { input: epicrisis }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.update(epicrisis)
	},

	removeEpicrisis(_obj, { _id }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.remove(_id)
	},

	printEpicrisis(_obj, { _id, epicrisisTemplate }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.printEpicrisis(_id, epicrisisTemplate)
	},
}
