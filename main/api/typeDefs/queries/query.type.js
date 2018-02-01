const User = require('./user.type')
const Patient = require('./patient.type')
const Dictionary = require('./dictionary.type')

const Query = `
	type Query {
		me: User
		# patients
		patient(_id: ID): Patient
		patients(input: PatientQueryInput): PatientQueryPayload
		# terms
		term(_id: ID): Term
		terms(input: TermQueryInput): TermQueryPayload
	}
`

module.exports = [Query, User, Patient, Dictionary]
