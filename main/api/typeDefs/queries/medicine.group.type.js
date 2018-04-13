const { createPaginationTypes } = require('../create.pagination.types')

const subtypeName = 'Medicine'
const typeName = 'MedicineGroup'

const Medicine = `
	type ${subtypeName} {
		name: String!
		defaultValue: String
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

	${Medicine}

	${createPaginationTypes(typeName)}
`

module.exports = MedicineGroup
