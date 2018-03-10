import AnyValidator from './validators/any.validator'
import RefValidator from './validators/ref.validator'
import DateValidator from './validators/date.validator'
import NumberValidator from './validators/number.validator'
import BooleanValidator from './validators/bool.validator'
import StringValidator from './validators/string.validator'
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

	static date() {
		return DateValidator.create().date()
	}

	static number() {
		return NumberValidator.create().number()
	}

	static string() {
		return StringValidator.create().string()
	}

	static boolean() {
		return BooleanValidator.create().boolean()
	}

	static assignMessages(newMessages) {
		assignMessages(newMessages)
	}
}

export default Validation
