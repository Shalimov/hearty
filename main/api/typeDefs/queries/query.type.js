const User = require('./user.type')
const Dictionary = require('./dictionary.type')
const Epicrisis = require('./epicrisis')

const Query = `
	type Query {
		me: User
		
		# terms
		term(_id: ID): Term
		terms(input: TermQueryInput): TermQueryPayload
		
		# epicisis
		epicrisis(_id: ID): Epicrisis
		epicrises(input: EpicrisisQueryInput): EpicrisisQueryPayload
		epicrisisTemplates: [String!]
	}
`

module.exports = [Query, User, Dictionary, Epicrisis]
