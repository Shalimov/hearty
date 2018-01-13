const User = require('./user.type')

const Query = `
	type Query {
		me: User
	}
`

module.exports = [Query, User]
