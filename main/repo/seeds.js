const bcrypt = require('bcrypt')

const getHash = pwd => bcrypt.hashSync(pwd, 10)
const BASE_PASSWORD = '!QAZ2wsx'

module.exports = {
	async init(repo) {
		const usersCount = await repo.users.count()

		if (usersCount > 0) {
			return
		}

		await repo.users.insertAsync([
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
