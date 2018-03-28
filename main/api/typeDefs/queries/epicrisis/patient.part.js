const EpicrisisPatient = `
	fullname: String!
	birthdate: String!
	region: String!
	address: String!
	jobInfo: String!
	arrivalAt: Date!
	departureAt: Date
`

module.exports = typeName => `
	type ${typeName}Patient {
		${EpicrisisPatient}
	}

	input ${typeName}PatientInput {
		${EpicrisisPatient}
	}
`
