const { createPaginationTypes } = require('../create.pagination.types')

const typeName = 'Term'

const Dictionary = `
	type SubTerm {
		term: String!
		tags: [String!]
	}

	type ${typeName} {
		_id: ID!
		term: String!
		subTerms: [SubTerm]!
	}

	${createPaginationTypes(typeName)}
`

module.exports = Dictionary
