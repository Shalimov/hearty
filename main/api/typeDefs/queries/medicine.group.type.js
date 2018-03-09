const { createPaginationTypes } = require('../create.pagination.types')

const subtypeName = 'Medicine'
const typeName = 'MedicineGroup'

const Medicine = `
	type ${subtypeName} {
		name: String!
	}
`

const MedicineGroup = `
	type ${typeName} {
		_id: ID!
		groupName: String!
		listOfMedicaments: [${subtypeName}]!
	}

	${Medicine}

	${createPaginationTypes(typeName)}
`

module.exports = MedicineGroup
