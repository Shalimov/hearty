import fp from 'lodash/fp'

import Validator from './validator'
import ERROR_KEYS from '../errors/error.keys'

class AnyValidator extends Validator {
	static create() {
		return new AnyValidator()
	}

	any() {
		return this
	}

	min(length) {
		return this.pushValidator(
			ERROR_KEYS.MIN,
			value => value.length >= length,
			{ args: length }
		)
	}

	max(length) {
		return this.pushValidator(
			ERROR_KEYS.MAX,
			value => value.length <= length,
			{ args: length }
		)
	}

	required() {
		return this.pushValidator(
			ERROR_KEYS.REQUIRED,
			fp.negate(Validator.isBlank),
			{ forceCheck: true }
		)
	}
}

export default AnyValidator
