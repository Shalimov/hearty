import fp from 'lodash/fp'

import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class BooleanValidator extends AnyValidator {
	static create() {
		return new BooleanValidator()
	}

	boolean() {
		return this.pushValidator(ERROR_KEYS.BOOLEAN.TYPE, fp.isBoolean)
	}
}

export default BooleanValidator
