import Ego from 'utils/validation'

const KEYS = Ego.ERROR_KEYS

const descriptions = {
	validation: {
		[KEYS.DEFAULT]: () => 'Поле содержит ошибки',

		/* ANY */
		[KEYS.REQUIRED]: () => 'Поле обязательно для заполнения',
		[KEYS.MIN]: ({ label, args }) => `${label} должно быть не менее ${args}`,
		[KEYS.MAX]: ({ label, args }) => `${label} должно быть не более ${args}`,

		/* REF */
		[KEYS.REF.MATCH]: ({ label }) => `${label} должен совпадать`,

		/* STRING */
		[KEYS.STRING.TYPE]: ({ label }) => `${label} должно быть строкой`,
		[KEYS.STRING.ALPHANUM]: ({ label }) => `${label} must contain only a-z A-Z 0-9 symbols`,
		[KEYS.STRING.ENUM]: ({ label, args }) => `${label} must be one of [${args}]`,
		[KEYS.STRING.EMAIL]: ({ label }) => `${label} должно быть корректным`,
		[KEYS.STRING.PATTERN]: ({ label }) => `${label} must match the specific pattern`,
		[KEYS.STRING.USERNAME]: ({ label }) => `${label} must contain only a-z, A-Z, 0-9, -, _ symbols`,
		[KEYS.STRING.DIGIT_LINE]: ({ label }) => `${label} must contain digits only`,
		[KEYS.STRING.PHONE_NUMBER]: ({ label }) => `${label} must correspond the following format +XXXXXXXXXXX(X)`,
		[KEYS.STRING.SIMPLE_PASSWORD]: ({ label }) => `${label} must include only latin symbols/digits and have at least one digit, one uppercase and lowercase letter`,

		/* DATE */
		[KEYS.DATE.TYPE]: ({ label }) => `${label} должно быть датой`,

		/* NUMBER */
		[KEYS.NUMBER.TYPE]: ({ label }) => `${label} должно быть числом`,
	},

	errors: {

	},

	common: {
	},

	tables: {
		notFound: 'Ни одной записи не найдено',
		loading: 'В процессе загрузки',
		page: 'Страница',
		of: 'из',
		prev: 'предыдущая',
		next: 'следующая',
	},

	headers: {
		welcome: 'Добро пожаловать',
		forgotPassword: 'Забыли пароль',
	},

	descriptions: {
		forgotPassword: 'Если вы забыли пароль то паниковать не стоит, просто введите адрес своей почты и мы поможем вам с восстановлением.',
		welcome: 'Рутина станет незаметной',
		welcomeFeatures: 'Добро пожаловать в Hearty. Данная программа поможет вам справляться с рутинными задачами быстро и без труда, концентрируясь на самом важном',
	},

	links: {
		signup: 'Регистрация',
		forgotPassword: 'Забыли пароль',
		main: 'Главная',
		dictionary: 'Словарь',
		patients: 'Пациенты',
		addPatient: 'Добавить пациента',
	},

	buttons: {
		addTerm: 'Добавить термин',
		addSubTerm: 'Добавить подтермин',
		search: 'Найти',
		save: 'Сохранить',
		submit: 'Отправить',
		back: 'Назад',
		signin: 'Войти',
	},

	labels: {
		email: 'Адрес электронной почты',
		password: 'Пароль',
		fullname: 'ФИО',
		birthdate: 'Дата рождения',
		region: 'Город/Регион',
		address: 'Адрес',
		term: 'Термин',
		subTerm: 'Подтермин',
		name: 'Название',
	},

	legends: {
		editPatient: 'Данные пациента',
	},

	regions: [
		{ id: 0, value: 'г. Могилев' },
		{ id: 1, value: 'Могилевский район' },
	],
}

export default descriptions

