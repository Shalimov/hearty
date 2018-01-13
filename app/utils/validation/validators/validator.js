import fp from 'lodash/fp'

import ERROR_KEYS from '../errors/error.keys'
import ERROR_MESSAGES from '../errors/error.messages'

class Validator {
	static EMPTY_STRING = ''

	constructor() {
		this.labelKey = 'Value'
		this.localMessages = {}
		this.validationChain = []
	}

	static create() {
		return new Validator()
	}

	static isBlank(value) {
		return value == null || fp.trim(value) === Validator.EMPTY_STRING
	}

	get isValidator() {
		return true
	}

	/* Helpers */
	clone() {
		const clone = this.constructor.create()
		clone.labelKey = this.labelKey
		clone.validationChain = this.validationChain.slice(0)
		return clone
	}

	// eslint-disable-next-line
	wrapValidator(key, isValidFn, { args, forceCheck = false }) {
		return (value, context) => {
			if (forceCheck || !Validator.isBlank(value)) {
				return [key, isValidFn(value, context), args]
			}

			return [key, true, args]
		}
	}

	pushValidator(errorKey, isValidFn, opts) {
		const validator = this.wrapValidator(errorKey, isValidFn, { ...opts })
		const clone = this.clone()

		clone.validationChain.push(validator)
		return clone
	}

	label(value) {
		const clone = this.clone()
		clone.labelKey = value
		return clone
	}

	messages(messages) {
		const clone = this.clone()
		Object.assign(clone.localMessages, messages)
		return clone
	}

	// eslint-disable-next-line
	getMessage(messageKey, params) {
		const messageFn = this.localMessages[messageKey]
			|| ERROR_MESSAGES[messageKey]
			|| ERROR_MESSAGES[ERROR_KEYS.DEFAULT]

		return messageFn(params)
	}
	/* End Helpers */

	isValid(value, context) {
		return fp.every((validator) => {
			const [, isValid] = validator(value, context)
			return isValid
		}, this.validationChain)
	}

	isInvalid(value, context) {
		return !this.isValid(value, context)
	}

	/* eslint-disable */
	validate(value, { context }) {
		for (const validator of this.validationChain) {
			const [errorKey, isValid, args] = validator(value, context)

			if (isValid) {
				continue
			}

			const label = this.labelKey
			const message = this.getMessage(errorKey, { value, args, label })

			return {
				errorKey,
				value,
				args,
				label,
				message
			}
		}
	}
	/* eslint-enable */
}

export default Validator
