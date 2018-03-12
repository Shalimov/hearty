const fp = require('lodash/fp')
const Chance = require('chance')
const repo = require('../main/repo')

const chance = new Chance()
const DEFAULT_ANALYSIS_COUNT = 50

repo.init().then(({ analyses }) =>
	analyses.insertAsync(fp.times(() => ({
		name: chance.name(),
		pattern: chance.sentence({ words: 10 }),
		basic: chance.bool(),
	}), DEFAULT_ANALYSIS_COUNT))
)
