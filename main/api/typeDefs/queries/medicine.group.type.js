const { createPaginationTypes } = require('../create.pagination.types')

const subtypeName = 'Medicine'
const typeName = 'MedicineGroup'

const Medicine = `
	type ${subtypeName} {
		_id: ID!
		name: String!
		prescription: String
	}
`

const MedicineInput = `
	input ${subtypeName}Input {
		_gid: ID!
		_id: ID
		name: String!
		prescription: String
	}
`

const MedicineGroupInput = `
	input ${typeName}Input {
		_id: ID
		groupName: String!
		priority: Int!
		note: String
	}
`

const MedicineGroup = `
	type ${typeName} {
		_id: ID!
		groupName: String!
		priority: Int!
		note: String
		listOfMedicaments: [${subtypeName}]!
	}

	${MedicineGroupInput}
	${MedicineInput}
	${Medicine}

	${createPaginationTypes(typeName)}
`

module.exports = MedicineGroup
