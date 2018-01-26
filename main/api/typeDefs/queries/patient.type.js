const Patient = `
	type Patient {
		_id: ID!
		fullname: String!
		birthdate: Date!
		region: String!
		address: String!
	}

	type PatientQueryPayload {
		totalCount: Int!
		totalPages: Int!
		pageSize: Int!
		content: [Patient]!
	}

	input PatientQueryInput {
		limit: Int!
		skip: Int!
		term: String
	}

	input PatientInput {
		_id: ID
		fullname: String!
		birthdate: Date!
		region: String!
		address: String!	
	}
`

module.exports = Patient
