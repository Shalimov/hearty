const { createPaginationTypes } = require('../create.pagination.types')

const typeName = 'Analysis'

const typeBody = `
	name: String!
	pattern: String!
	basic: Boolean!
`

const Analysis = `
	type ${typeName} {
		_id: ID!
		${typeBody}
	}

	input ${typeName}Input {
		_id: ID
		${typeBody}
	}

	${createPaginationTypes(typeName)}
`

module.exports = Analysis
