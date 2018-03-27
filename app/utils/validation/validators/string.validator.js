import fp from 'lodash/fp'
import isEmail from 'email-validator'

import RefValidator from './ref.validator'
import ERROR_KEYS from '../errors/error.keys'

class StringValidator extends RefValidator {
	static PASSWORD_COMPLEXITY_PATTERNS = [
		/[A-Z]/, // UPPER_CASE
		/[a-z]/, // LOWER_CASE
		/\d/, 	 // DIGIT
	]
	static DIGIT_LINE = /^\d+$/
	static ALPHNUM_PATTERN = /^[a-zA-Z0-9\s]+$/
	static PHONE_NUMBER = /^\+\d{11,12}$/
	static USERNAME_PATTERN = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/
	static URL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\\+.~#?&//=]*)/

	static create() {
		return new StringValidator()
	}

	string() {
		return this.pushValidator(ERROR_KEYS.STRING.TYPE, fp.isString)
	}

	email() {
		return this.pushValidator(
			ERROR_KEYS.STRING.EMAIL,
			value => isEmail.validate(value)
		)
	}

	url() {
		return this.pushValidator(
			ERROR_KEYS.STRING.URL,
			value => StringValidator.URL.test(value)
		)
	}

	enum(allowedValues) {
		const isAllowedValues = fp.includes(fp.placeholder, allowedValues)

		return this.pushValidator(
			ERROR_KEYS.STRING.ENUM,
			isAllowedValues,
			{ args: allowedValues }
		)
	}

	alphanum() {
		return this.pushValidator(
			ERROR_KEYS.STRING.ALPHANUM,
			value => StringValidator.ALPHNUM_PATTERN.test(value)
		)
	}

	digitLine() {
		return this.pushValidator(
			ERROR_KEYS.STRING.DIGIT_LINE,
			value => StringValidator.DIGIT_LINE.test(value)
		)
	}

	username() {
		return this.pushValidator(
			ERROR_KEYS.STRING.USERNAME,
			value => StringValidator.USERNAME_PATTERN.test(value),
		)
	}

	simplePassword() {
		return this.pushValidator(
			ERROR_KEYS.STRING.SIMPLE_PASSWORD,
			value => fp.every(pattern => pattern.test(value), StringValidator.PASSWORD_COMPLEXITY_PATTERNS)
		)
	}

	phoneNumber() {
		return this.pushValidator(
			ERROR_KEYS.STRING.PHONE_NUMBER,
			value => StringValidator.PHONE_NUMBER.test(value)
		)
	}

	pattern(regex) {
		return this.pushValidator(
			ERROR_KEYS.STRING.PATTERN,
			value => regex.test(value),
			{ args: fp.toString(regex) }
		)
	}
}

export default StringValidator
