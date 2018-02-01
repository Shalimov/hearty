const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
		# patients
		createPatient(input: PatientInput): Patient
		updatePatient(input: PatientInput): Patient
		# terms
		createTerm(term: String!): Term
		updateTerm(_id: ID!, term: String!): Term
		removeTerm(_id: ID!): Term
		# subterms
		createSubterm(_id: ID!, term: String!): Term
		removeSubterm(_id: ID!, term: String!): Term
	}
`

module.exports = [Mutation]
