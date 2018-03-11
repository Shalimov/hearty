module.exports = {
	analysis(_obj, { _id }, context) {
		const { analysisService } = context.services
		return analysisService.get(_id)
	},

	analyses(_obj, { input }, context) {
		const { analysisService } = context.services
		return analysisService.query(input)
	},
}
