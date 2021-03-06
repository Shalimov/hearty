import AnyValidator from './validators/any.validator'
import RefValidator from './validators/ref.validator'
import BooleanValidator from './validators/bool.validator'
import DateValidator from './validators/date.validator'
import NumberValidator from './validators/number.validator'
import StringValidator from './validators/string.validator'
import ShapeValidator from './validators/shape.validator'
import ArrayValidator from './validators/array.validator'

import ERROR_KEYS from './errors/error.keys'
import { assignMessages } from './errors/error.messages'

class Validation {
	static ERROR_KEYS = ERROR_KEYS

	static any() {
		return AnyValidator.create().any()
	}

	static ref() {
		return RefValidator.create().ref()
	}

	static boolean() {
		return BooleanValidator.create().boolean()
	}

	static date() {
		return DateValidator.create().date()
	}

	static number() {
		return NumberValidator.create().number()
	}

	static string() {
		return StringValidator.create().string()
	}

	static array() {
		return ArrayValidator.create().array()
	}

	static shape() {
		return ShapeValidator.create().shape()
	}

	static assignMessages(newMessages) {
		assignMessages(newMessages)
	}
}

export default Validation
