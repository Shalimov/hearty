const AuthMutation = require('./auth.mutation')
const PatientMutation = require('./patient.mutation')

const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
		createPatient(input: PatientInput): Patient
		updatePatient(input: PatientInput): Patient
	}
`

module.exports = [Mutation, AuthMutation, PatientMutation]
