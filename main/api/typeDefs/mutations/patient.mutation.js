const PatientMutation = `
	input PatientInput {
		_id: ID
		fullname: String!
		birthdate: Date!
		region: String!
		address: String!	
	}
`

module.exports = PatientMutation
