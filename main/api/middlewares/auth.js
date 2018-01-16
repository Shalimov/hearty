const fp = require('lodash/fp')
const Boom = require('boom')
const jwt = require('jsonwebtoken')

const { jwtsecret } = require('../../config')

const verifyToken = (data, context, next) => {
	const token = fp.get('meta.context.headers.authorization', data)

	if (!token) {
		next()
		return
	}

	jwt.verify(token, jwtsecret, (error, decoded) => {
		if (!error) {
			context.set('userId', decoded.userId)
			next()
		} else {
			next(Boom.unauthorized(error.messsge))
		}
	})
}

const retrieveUser = async (data, context, next) => {
	const id = context.userId

	if (id) {
		const { users } = context.repository
		const user = await users.findById(context.userId)
		context.set('user', user)
	}

	return next()
}

module.exports = {
	verifyToken,
	retrieveUser,
}
