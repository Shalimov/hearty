const { createPaginationTypes } = require('../create.pagination.types')

const typeName = 'Patient'

const Patient = `
	type ${typeName} {
		_id: ID!
		fullname: String!
		birthdate: Date!
		region: Int!
		address: String!
	}

	${createPaginationTypes(typeName)}

	input ${typeName}Input {
		_id: ID
		fullname: String!
		birthdate: Date!
		region: Int!
		address: String!	
	}
`

module.exports = Patient
