const User = require('./user.type')
const Analysis = require('./analysis.type')
const Dictionary = require('./dictionary.type')
const MedicineGroup = require('./medicine.group.type')
const Epicrisis = require('./epicrisis')

const Query = `
	type Query {
		me: User
		
		# analysis
		analysis(_id: ID!): Analysis
		analyses(input: AnalysisQueryInput): AnalysisQueryPayload

		# terms
		term(_id: ID!): Term
		terms(input: TermQueryInput): TermQueryPayload
		
		# medicine groups
		medicineGroup(_id: ID!): MedicineGroup
		medicineGroups(input: MedicineGroupQueryInput): MedicineGroupQueryPayload
		
		# epicisis
		epicrisis(_id: ID!): Epicrisis
		epicrises(input: EpicrisisQueryInput): EpicrisisQueryPayload
		epicrisisTemplates: [String!]
	}
`

module.exports = [
	Query,
	User,
	Analysis,
	Dictionary,
	Epicrisis,
	MedicineGroup,
]
