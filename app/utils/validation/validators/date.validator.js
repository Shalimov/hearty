import fp from 'lodash/fp'

import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class RefValidator extends AnyValidator {
	static create() {
		return new RefValidator()
	}

	date() {
		return this.pushValidator(ERROR_KEYS.DATE.TYPE, fp.isDate)
	}
}

export default RefValidator
