module.exports = {
	createTerm(_, { term }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.create({ term, subTerms: [] })
	},

	updateTerm(_, { _id, term }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.update({ _id, term })
	},

	removeTerm(_, { _id }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.remove(_id)
	},

	createSubterm(_, { _id, term }, context) {
		const { dictionaryService } = context.services
		const { content, tags } = dictionaryService.splitIntoTagsAndContent(term)
		
		return dictionaryService.update({ _id }, () => ({
			$addToSet: {
				subTerms: {
					term: content,
					tags,
				},
			},
		}))
	},

	removeSubterm(_, { _id, term }, context) {
		const { dictionaryService } = context.services
		return dictionaryService.update({ _id }, () => ({ $pull: { subTerms: { term } } }))
	},
}
