import Ego from 'utils/validation'

const KEYS = Ego.ERROR_KEYS

export default {
	[KEYS.DEFAULT]: ({ label }) => `${label} содержит ошибки`,

	/* ANY */
	[KEYS.REQUIRED]: ({ label }) => `${label} обязательно для заполнения`,
	[KEYS.MIN]: ({ label, args }) => `${label} должно быть не меньше ${args}`,
	[KEYS.MAX]: ({ label, args }) => `${label} должно быть не больше ${args}`,

	/* REF */
	[KEYS.REF.MATCH]: ({ label }) => `${label} должно соответствовать`,

	/* STRING */
	[KEYS.STRING.TYPE]: ({ label }) => `${label} должно быть строкой`,
	[KEYS.STRING.ALPHANUM]: ({ label }) => `${label} должно содержать только латинские символы и цифры`,
	[KEYS.STRING.ENUM]: ({ label, args }) => `${label} должно быть одним из [${args}]`,
	[KEYS.STRING.URL]: ({ label }) => `${label} должно быть интернет адресом`,
	[KEYS.STRING.EMAIL]: ({ label }) => `${label} должно быть адресом электронной почты`,
	[KEYS.STRING.PATTERN]: ({ label }) => `${label} должно соответствовать шаблону`,
	[KEYS.STRING.USERNAME]: ({ label }) => `${label} должно содержать только a-z, A-Z, 0-9, -, _ символы`,
	[KEYS.STRING.DIGIT_LINE]: ({ label }) => `${label} должно содержать только цифры`,
	[KEYS.STRING.PHONE_NUMBER]: ({ label }) => `${label} должно соответствовать формату +XXXXXXXXXXX(X)`,
	[KEYS.STRING.SIMPLE_PASSWORD]: ({ label }) => `${label} должно содержать верхний/нижний регистр и цифры`,

	/* DATE */
	[KEYS.DATE.TYPE]: ({ label }) => `${label} должно быть датой`,

	/* BOOLEAN */
	[KEYS.BOOLEAN.TYPE]: ({ label }) => `${label} должно быть да/нет`,

	/* NUMBER */
	[KEYS.NUMBER.TYPE]: ({ label }) => `${label} должно быть числом`,

	/* SHAPE */
	[KEYS.SHAPE.TYPE]: ({ label }) => `${label} должно быть сложным объектом`,

	/* ARRAY */
	[KEYS.ARRAY.TYPE]: ({ label }) => `${label} должно быть массивом`,
}
