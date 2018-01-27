const fp = require('lodash/fp')
const Chance = require('chance')
const repo = require('../main/repo')

const chance = new Chance()
const DEFAULT_PATIENT_COUNT = 50

repo.init().then(({ patients }) =>
	patients.insertAsync(fp.times(() => ({
		fullname: chance.name(),
		birthdate: chance.birthday(),
		region: chance.pickone([0, 1]),
		address: chance.address(),
	}), DEFAULT_PATIENT_COUNT))
)
