const Mutation = `
	type Mutation {
		createToken(input: CredentialsInput): CreateTokenPayload
		
		# epicrisis
		createEpicrisis(input: EpicrisisInput!): Epicrisis
		updateEpicrisis(input: EpicrisisInput!): Epicrisis
		removeEpicrisis(_id: ID!): Epicrisis
		printEpicrisis(_id: ID!, epicrisisTemplate: String!): Boolean

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
