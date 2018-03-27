import fp from 'lodash/fp'

import Validator from './validator'
import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class ArrayValidator extends AnyValidator {
	itemScheme = null

	static create() {
		return new ArrayValidator()
	}

	array() {
		return this.pushValidator(ERROR_KEYS.ARRAY.TYPE, fp.isArrayLike)
	}

	clone() {
		const clone = super.clone()
		clone.itemScheme = this.itemScheme
		return clone
	}

	of(scheme) {
		if (!fp.isObject(scheme)) {
			throw new Error('array#of scheme should be a validation#scheme')
		}

		const clone = this.clone()
		this.itemScheme = scheme
		return clone
	}

	isValid(value, context) {
		const isValid = super.isValid(value, context)

		if (!isValid || (Validator.isBlank(value) && isValid)) {
			return isValid
		}

		if (!this.itemScheme) {
			return true
		}

		return fp.every(item => this.itemScheme.isValid(item, value), value)
	}

	validate(collection, options) {
		const result = super.validate(collection, options)

		if (result || (Validator.isBlank(collection) && !result)) {
			return result
		}

		if (!this.itemScheme) {
			return undefined
		}

		for (const item of collection) {
			const innerResult = this.itemScheme.validate(item, { context: collection })

			if (innerResult) {
				return innerResult
			}
		}
	}
}

export default ArrayValidator
