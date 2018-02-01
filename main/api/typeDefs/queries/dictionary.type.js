const Dictionary = `
	type Term {
		_id: ID!
		term: String!
		subTerms: [Term]!
	}

	type TermQueryPayload {
		totalCount: Int!
		totalPages: Int!
		pageSize: Int!
		content: [Term]!
	}

	input TermQueryInput {
		limit: Int!
		skip: Int!
		term: String
	}
`

module.exports = Dictionary
