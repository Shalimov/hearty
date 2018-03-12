import KEYS from './error.keys'

const defaultMessages = {
	[KEYS.DEFAULT]: ({ label }) => `${label} is invalid`,

	/* ANY */
	[KEYS.REQUIRED]: ({ label }) => `${label} is required`,
	[KEYS.MIN]: ({ label, args }) => `${label} should have length at least ${args}`,
	[KEYS.MAX]: ({ label, args }) => `${label} should have length at most ${args}`,

	/* REF */
	[KEYS.REF.MATCH]: ({ label }) => `${label} must match`,

	/* STRING */
	[KEYS.STRING.TYPE]: ({ label }) => `${label} must be a string`,
	[KEYS.STRING.ALPHANUM]: ({ label }) => `${label} must contain only a-z A-Z 0-9 symbols`,
	[KEYS.STRING.ENUM]: ({ label, args }) => `${label} must be one of [${args}]`,
	[KEYS.STRING.EMAIL]: ({ label }) => `${label} must be valid`,
	[KEYS.STRING.PATTERN]: ({ label }) => `${label} must match the specific pattern`,
	[KEYS.STRING.USERNAME]: ({ label }) => `${label} must contain only a-z, A-Z, 0-9, -, _ symbols`,
	[KEYS.STRING.DIGIT_LINE]: ({ label }) => `${label} must contain digits only`,
	[KEYS.STRING.PHONE_NUMBER]: ({ label }) => `${label} must correspond the following format +XXXXXXXXXXX(X)`,
	[KEYS.STRING.SIMPLE_PASSWORD]: ({ label }) => `${label} must include only latin symbols/digits and have at least one digit, one uppercase and lowercase letter`,

	/* DATE */
	[KEYS.DATE.TYPE]: ({ label }) => `${label} must be a date`,

	/* NUMBER */
	[KEYS.NUMBER.TYPE]: ({ label }) => `${label} must be a number`,
	[KEYS.NUMBER.MIN]: ({ label, args }) => `${label} must be a greater than ${args}`,
	[KEYS.NUMBER.MAX]: ({ label, args }) => `${label} must be a lower than ${args}`,

	/* BOOLEAN */
	[KEYS.BOOLEAN.TYPE]: ({ label }) => `${label} must be a number`,
}

const assignMessages = (messages) => {
	Object.assign(defaultMessages, messages)
}

export default defaultMessages
export { assignMessages }
