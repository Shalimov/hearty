const { createPaginationTypes } = require('../create.pagination.types')

const subtypeName = 'Medicine'
const typeName = 'MedicineGroup'

const Medicine = `
	type ${subtypeName} {
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
	${Medicine}

	${createPaginationTypes(typeName)}
`

module.exports = MedicineGroup
