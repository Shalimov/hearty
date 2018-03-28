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
		URL: 'string.url',
		ENUM: 'string.enum',
		EMAIL: 'string.email',
		PATTERN: 'string.pattern',
		ALPHANUM: 'string.alphanum',
		USERNAME: 'string.username',
		DIGIT_LINE: 'string.digit.line',
		PHONE_NUMBER: 'string.phone.number',
		SIMPLE_PASSWORD: 'string.simple.password',
	},

	BOOLEAN: {
		TYPE: 'boolean.type',
	},

	DATE: {
		TYPE: 'date.type',
	},

	NUMBER: {
		TYPE: 'date.type',
		MIN: 'number.min',
		MAX: 'number.max',
	},

	ARRAY: {
		TYPE: 'array.type',
	},

	SHAPE: {
		TYPE: 'shape.type',
	},
}
