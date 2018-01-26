const UserQuery = require('./user')
const PatientQuery = require('./patient')

module.exports = {
	Query: Object.assign({}, UserQuery, PatientQuery),
}
