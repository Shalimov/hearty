const fp = require('lodash/fp')

const repo = require('../main/repo')

repo.init().then(async ({ medicineGroups }) => {
	const groups = await medicineGroups.findAsync({})

	const createBatch = fp.map(({ _id, listOfMedicaments }) => {
		return medicineGroups.updateAsync({
			_id,
		}, {
			$set: {
				priority: 1,
				listOfMedicaments: fp.map(
					value => fp.assign({ _id: medicineGroups.createNewId() }, value),
					listOfMedicaments
				),
			},
		})
	})

	await Promise.all(createBatch(groups))
})
