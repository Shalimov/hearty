const { createPaginationTypes } = require('../create.pagination.types')

const typeName = 'Term'

const Dictionary = `
	type ${typeName} {
		_id: ID!
		term: String!
		subTerms: [${typeName}]!
	}

	${createPaginationTypes(typeName)}
`

module.exports = Dictionary
