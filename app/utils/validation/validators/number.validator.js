import fp from 'lodash/fp'

import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class NumberValidator extends AnyValidator {
	static create() {
		return new NumberValidator()
	}

	number() {
		return this.pushValidator(ERROR_KEYS.NUMBER.TYPE, fp.isNumber)
	}

	min(minValue) {
		return this.pushValidator(
			ERROR_KEYS.NUMBER.MIN,
			value => value >= minValue,
			{ args: minValue }
		)
	}

	max(maxValue) {
		return this.pushValidator(
			ERROR_KEYS.NUMBER.MAX,
			value => value <= maxValue,
			{ args: maxValue }
		)
	}
}

export default NumberValidator
