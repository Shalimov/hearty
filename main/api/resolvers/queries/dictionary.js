module.exports = {
	term(_obj, { _id }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.get(_id)
	},

	terms(_obj, { input }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.query(input)
	},
}
