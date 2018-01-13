import AnyValidator from './validators/any.validator'
import RefValidator from './validators/ref.validator'
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

	static string() {
		return StringValidator.create().string()
	}

	static assignMessages(newMessages) {
		assignMessages(newMessages)
	}
}

export default Validation
