import fp from 'lodash/fp'

import Validator from './validator'
import AnyValidator from './any.validator'
import ERROR_KEYS from '../errors/error.keys'

class ShapeValidator extends AnyValidator {
	shapeScheme = null

	static create() {
		return new ShapeValidator()
	}

	clone() {
		const clone = super.clone()
		clone.shapeScheme = this.shapeScheme
		return clone
	}

	shape() {
		return this.pushValidator(ERROR_KEYS.SHAPE.TYPE, fp.isObject)
	}

	of(scheme) {
		if (!fp.isObject(scheme)) {
			throw new Error('shape scheme should be an object')
		}

		const clone = this.clone()
		clone.shapeScheme = scheme
		return clone
	}

	isValid(value, context) {
		const isValid = super.isValid(value, context)

		if (!isValid || (Validator.isBlank(value) && isValid)) {
			return isValid
		}

		const entries = fp.entries(this.shapeScheme)

		return fp.every(([key, scheme]) => scheme.isValid(value[key], value), entries)
	}

	validate(value, options) {
		const result = super.validate(value, options)

		if (result || (Validator.isBlank(value) && !result)) {
			return result
		}

		const entries = fp.entries(this.shapeScheme)

		for (const [key, scheme] of entries) {
			const innerResult = scheme.validate(value[key], { context: value })

			if (innerResult) {
				return innerResult
			}
		}
	}
}

export default ShapeValidator
