const fp = require('lodash/fp')
const Chance = require('chance')
const repo = require('../main/repo')

const chance = new Chance()
const DEFAULT_TERM_COUNT = 20
const DEFAULT_SUB_TERM_COUNT = 10

repo.init().then(({ dictionary }) =>
	dictionary.insertAsync(fp.times(() => ({
		term: chance.word(),
		subTerms: fp.times(() => ({ term: chance.sentence()}), DEFAULT_SUB_TERM_COUNT),
	}), DEFAULT_TERM_COUNT))
)
