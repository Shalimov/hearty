module.exports = {
	epicrisis(_obj, { _id }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.get(_id)
	},

	epicrises(_obj, { input }, context) {
		const { epicrisisService } = context.services
		return epicrisisService.query(input)
	},

	epicrisisTemplates(_obj, _params, context) {
		const { epicrisisService } = context.services
		return epicrisisService.queryTemplates()
	},
}
