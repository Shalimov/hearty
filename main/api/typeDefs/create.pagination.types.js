const createPaginationTypes = typeName => `
	type ${typeName}QueryPayload {
		totalCount: Int!
		totalPages: Int!
		pageSize: Int!
		page: Int!
		content: [${typeName}]!
	}

	input ${typeName}QueryInput {
		limit: Int!
		skip: Int!
		term: String
	}
`

module.exports = {
	createPaginationTypes,
}
