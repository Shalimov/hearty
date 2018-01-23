const PatientMutation = `
	input PatientInput {
		_id: ID
		fullname: String!
		birthdate: Int!
		region: String!
		address: String!	
	}
`

module.exports = PatientMutation
