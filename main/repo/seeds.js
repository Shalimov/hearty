const bcrypt = require('bcryptjs')

const getHash = pwd => bcrypt.hashSync(pwd, 10)
const BASE_PASSWORD = '!QAZ2wsx'

module.exports = {
	async init(repo) {
		const emails = [{
			email: 'work.igor.shalimov@gmail.com',
		}, {
			email: 'alesyainfarovich@icloud.com',
		}]

		const count = await repo.users.countAsync({ $or: emails })

		if (count > 0) {
			return
		}

		return repo.users.insertAsync([
			{
				username: 'igor_shalimov',
				email: 'work.igor.shalimov@gmail.com',
				password: getHash(BASE_PASSWORD),
			},
			{
				username: 'alesya_shalimova',
				email: 'alesyainfarovich@icloud.com',
				password: getHash(BASE_PASSWORD),
			},
		])
	},
}
