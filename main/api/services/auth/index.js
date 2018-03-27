const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Boom = require('boom')

const { AUTH } = require('../../../constants/error.keys')
const { jwtsecret, jwtperiod } = require('../../../config')

class AuthService {
	constructor(repository) {
		this.repository = repository
	}

	static create(repository) {
		return new AuthService(repository)
	}

	async createToken(email, password) {
		const { users } = this.repository
		const user = await users.findOneAsync({ email })

		// throw Boom.internal()

		if (!user) {
			throw Boom.notFound(AUTH.WRONG_PASSWORD_EMAIL)
		}

		const theSame = await bcrypt.compare(password, user.password)

		if (!theSame) {
			throw Boom.notFound(AUTH.WRONG_PASSWORD_EMAIL)
		}

		return new Promise((resolve, reject) => {
			jwt.sign({
				userId: user._id,
				email: user.email,
			}, jwtsecret, {
				expiresIn: jwtperiod,
			}, (err, token) => {
				if (err) {
					reject(err)
				} else {
					resolve({ token, me: user })
				}
			})
		})
	}
}

module.exports = AuthService
