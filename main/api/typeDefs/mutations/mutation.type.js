const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
		
		# epicrisis
		createEpicrisis(input: EpicrisisInput!): Epicrisis
		updateEpicrisis(input: EpicrisisInput!): Epicrisis
		removeEpicrisis(_id: ID!): Epicrisis
		printEpicrisis(_id: ID!, epicrisisTemplate: String!): Boolean
		openEpicrisesFolder: Boolean

		# analysis
		createAnalysis(input: AnalysisInput!): Analysis
		updateAnalysis(input: AnalysisInput!): Analysis
		removeAnalysis(_id: ID!): Analysis

		# medicineGroups
		createMedicineGroup(input: MedicineGroupInput!): MedicineGroup
		updateMedicineGroup(input: MedicineGroupInput!): MedicineGroup
		removeMedicineGroup(_id: ID!): MedicineGroup

		# medicine
		createMedicine(input: MedicineInput!): MedicineGroup
		updateMedicine(input: MedicineInput!): MedicineGroup
		removeMedicine(_gid: ID!, _id: ID!): MedicineGroup

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
