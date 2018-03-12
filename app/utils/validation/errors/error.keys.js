export default {
	DEFAULT: 'default',
	REQUIRED: 'required',
	MIN: 'min.length',
	MAX: 'max.length',

	REF: {
		MATCH: 'ref.match',
	},

	STRING: {
		TYPE: 'string.type',
		ENUM: 'string.enum',
		EMAIL: 'string.email',
		PATTERN: 'string.pattern',
		ALPHANUM: 'string.alphanum',
		USERNAME: 'string.username',
		DIGIT_LINE: 'string.digit.line',
		PHONE_NUMBER: 'string.phone.number',
		SIMPLE_PASSWORD: 'string.simple.password',
	},

	DATE: {
		TYPE: 'date.type',
	},

	NUMBER: {
		TYPE: 'number.type',
		MIN: 'number.min',
		MAX: 'number.max',
	},
	
	BOOLEAN: {
		TYPE: 'boolean.type',
	},
}
