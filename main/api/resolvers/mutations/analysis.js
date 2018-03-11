module.exports = {
	createAnalysis(_obj, { input: analysis }, context) {
		const { analysisService } = context.services
		return analysisService.create(analysis)
	},

	updateAnalysis(_obj, { input: analysis }, context) {
		const { analysisService } = context.services
		return analysisService.update(analysis)
	},

	removeAnalysis(_obj, { _id }, context) {
		const { analysisService } = context.services
		return analysisService.remove(_id)
	},
}
