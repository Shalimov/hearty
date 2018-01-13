// TODO: Experimental feature
import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class RefValidator extends AnyValidator {
	static create() {
		return new RefValidator()
	}

	ref() {
		const clone = this.clone()
		return clone
	}

	match(accessor) {
		return this.pushValidator(
			ERROR_KEYS.REF.MATCH,
			(value, ctx) => value === accessor(ctx)
		)
	}
}

export default RefValidator
