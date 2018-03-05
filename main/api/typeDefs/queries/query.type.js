const User = require('./user.type')
const Patient = require('./patient.type')
const Dictionary = require('./dictionary.type')
const Epicrisis = require('./epicrisis.type')

const Query = `
	type Query {
		me: User
		
		# patients
		patient(_id: ID): Patient
		patients(input: PatientQueryInput): PatientQueryPayload
		
		# terms
		term(_id: ID): Term
		terms(input: TermQueryInput): TermQueryPayload
		
		# epicisis
		epicrisis(_id: ID): Epicrisis
		epicrises(input: EpicrisisQueryInput): EpicrisisQueryPayload
		epicrisisTemplates: [String!]
	}
`

module.exports = [Query, User, Patient, Dictionary, Epicrisis]
