const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
		createPatient(input: PatientInput): Patient
		updatePatient(input: PatientInput): Patient
	}
`

module.exports = [Mutation]
