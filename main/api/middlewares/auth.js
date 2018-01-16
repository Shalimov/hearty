// const jwt = require('jsonwebtoken')

const verifyToken = (data, context, next) => {
	// jwt.verify(data)
	return next()
}

const retrieveUser = (data, context, next) => {
	return next()
}

module.exports = [verifyToken, retrieveUser]
