const User = require('./user.type')
const Patient = require('./patient.type')

const Query = `
	type Query {
		me: User
		patient(id: ID): Patient
	}
`

module.exports = [Query, User, Patient]
