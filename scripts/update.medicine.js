const repo = require('../main/repo')

repo.init().then(({ medicineGroups }) =>
	medicineGroups.updateAsync({}, { $set: { priority: 1 } }, { multi: true }))
