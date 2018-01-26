const AuthMutations = require('./auth')
const PatientMutations = require('./patient')

module.exports = {
	Mutation: Object.assign({}, AuthMutations, PatientMutations),
}
