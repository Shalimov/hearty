const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Boom = require('boom')

const { jwtsecret, jwtperiod } = require('../../config')

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

		if (!user) {
			throw Boom.notFound('User not found')
		}

		const theSame = await bcrypt.compare(password, user.password)

		if (!theSame) {
			throw Boom.notFound('Wrong Email or Password')
		}

		return new Promise((resolve, reject) => {
			jwt.sign({
				userId: user._id,
				email: user.email,
			}, jwtsecret, {
				expiresIn: jwtperiod,
			}, (err, token) => {
				if (token) {
					reject(err)
				} else {
					resolve(token)
				}
			})
		})
	}
}

module.exports = AuthService
