import Ego from 'utils/validation'

const KEYS = Ego.ERROR_KEYS

export default {
	[KEYS.DEFAULT]: () => 'Значение поля содержит ошибки',

	/* ANY */
	[KEYS.REQUIRED]: () => 'Поле обязательно для заполнения',
	[KEYS.MIN]: ({ args }) => `Значение поля должно быть не меньше ${args}`,
	[KEYS.MAX]: ({ args }) => `Значение поля должно быть не больше ${args}`,

	/* REF */
	[KEYS.REF.MATCH]: () => 'Значение поля должно соответствовать',

	/* STRING */
	[KEYS.STRING.TYPE]: () => 'Значение поля должно быть строкой',
	[KEYS.STRING.ALPHANUM]: () => 'Значение поля должно содержать только латинские символы и цифры',
	[KEYS.STRING.ENUM]: ({ args }) => `Значение поля должно быть одним из [${args}]`,
	[KEYS.STRING.URL]: () => 'Значение поля должно быть интернет адресом',
	[KEYS.STRING.EMAIL]: () => 'Значение поля должно быть адресом электронной почты',
	[KEYS.STRING.PATTERN]: () => 'Значение поля должно соответствовать шаблону',
	[KEYS.STRING.USERNAME]: () => 'Значение поля должно содержать только a-z, A-Z, 0-9, -, _ символы',
	[KEYS.STRING.DIGIT_LINE]: () => 'Значение поля должно содержать только цифры',
	[KEYS.STRING.PHONE_NUMBER]: () => 'Значение поля должно соответствовать формату +XXXXXXXXXXX(X)',
	[KEYS.STRING.SIMPLE_PASSWORD]: () => 'Значение поля должно содержать верхний/нижний регистр и цифры',

	/* DATE */
	[KEYS.DATE.TYPE]: () => 'Значение поля должно быть датой',

	/* BOOLEAN */
	[KEYS.BOOLEAN.TYPE]: () => 'Значение поля должно быть да/нет',

	/* NUMBER */
	[KEYS.NUMBER.TYPE]: () => 'Значение поля должно быть числом',
	[KEYS.NUMBER.MIN]: ({ args }) => `Значение поля должно содержать значение больше чем ${args}`,
	[KEYS.NUMBER.MAX]: ({ args }) => `Значение поля должно содержать значение меньше чем ${args}`,

	/* SHAPE */
	[KEYS.SHAPE.TYPE]: () => 'Значение поля должно быть сложным объектом',

	/* ARRAY */
	[KEYS.ARRAY.TYPE]: () => 'Значение поля должно быть массивом',
}
