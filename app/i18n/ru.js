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
		epicrisis: {
			epicNo: 'Номер эпикриза должен содержать только цифры и предусматривает наличие разделительных символов - или |',
			validation: 'На форме есть неточности. Проверьте пожалуйста все введенные данные.',
		},
		noAnalyses: 'Для заполнения выписки как правило необходимо иметь как минимум один анализ в графе анализы.',
		noMedicine: 'Для заполнения выписки как правило необходимо иметь как минимум одно лекарственное средство в графе лекарства.',
	},

	common: {
		typeToSearch: 'Начните ввод чтоб получить информацию',
		notFound: 'Ничего найти не удалось',
		handlingProcess: 'В процессе обработки...',
		runQuestion: 'Вы уверены что хотите выполнить данное действие?',
		removeQuestion: 'Вы уверены что хотите удалить данную запись?',
		operationCompleted: 'Всё прошло успешно',
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
		analyses: 'Анализы',
		epicrises: 'Эпикризы',
		medicine: 'Лекарства',
		dictionary: 'Словарь терминов',
		basic: 'Базовые',
		additional: 'Дополнительные',
	},

	descriptions: {
		epicrisisAnalysesExcluded: 'Анализы были исключены на предыдущем шаге, данных для заполнения нет.',
		epicrisisMedicineExcluded: 'Лекарства были исключены на предыдущем шаге, данных для заполнения нет.',
		epicrises: 'Здесь вы можете просмотреть все заведённые эпикризы.',
		dictionary: 'В словаре вы можете хранить данные, которые можно будет использовать в процессе заполнения эпикриза.',
		analyses: 'Здесь вы можете ввести шаблоны для анализов, котороые будут доступны при заполнении эпикриза.',
		medicine: 'Здесь вы можете ввести лекарства, которые будут доступны при заполнении эпикриза.',
		fromDictionary: 'Добавить из словаря',
		forgotPassword: 'Если вы забыли пароль то паниковать не стоит, просто введите адрес своей почты и мы поможем вам с восстановлением.',
		welcome: 'Рутина станет незаметной',
		welcomeFeatures: 'Добро пожаловать в Hearty. Данная программа поможет вам справляться с рутинными задачами быстро и без труда, концентрируясь на самом важном',
	},

	links: {
		epicrisis: 'Эпикриз',
		signup: 'Регистрация',
		forgotPassword: 'Забыли пароль',
		main: 'Главная',
		dictionary: 'Словарь',
		patients: 'Пациенты',
		medicine: 'Лекарства',
		analysis: 'Анализы',
		addPatient: 'Добавить пациента',
		addAnalysis: 'Добавить анализ',
		addEpicrisis: 'Добавть эпикриз',
		follow: 'Перейти',
	},

	buttons: {
		addTerm: 'Добавить термин',
		addSubTerm: 'Добавить подтермин',
		search: 'Найти',
		save: 'Сохранить',
		saveAndPrint: 'Сохранить и распечатать',
		submit: 'Отправить',
		next: 'Далее',
		back: 'Назад',
		signin: 'Войти',
		print: 'Печатать',
		ok: 'Да',
		no: 'Нет',
		logout: 'Выйти',
	},

	labels: {
		epicrisisNo: 'Номер эпикриза',
		email: 'Адрес электронной почты',
		password: 'Пароль',
		fullname: 'ФИО',
		birthdate: 'Дата рождения',
		region: 'Город/Регион',
		address: 'Адрес',
		term: 'Термин',
		subTerm: 'Подтермин',
		name: 'Название',
		medicine: 'Название лекарства',
		medicineGroup: 'Название группы лекарств',
		jobInfo: 'Место работы',
		arrivalAt: 'Дата поступления',
		departureAt: 'Дата выписки',
		docTemplate: 'Шаблон документа',
		other: 'Другое',
		recommended: 'Рекомендованно',
		summary: 'Итого',
		type: 'Тип',
		epicrisis: {
			done: 'Выписан',
			draft: 'Черновик',
		},
		analysis: {
			pattern: 'Шаблон',
			basic: 'Базовый',
		},
		usdScopia: {
			obp: 'УЗИ ОБП',
			bca: 'УЗИ БЦА',
			fgds: 'ФГДС',
			bronchoscopy: 'Бронхоскопия',
		},
		diagnosis: {
			main: 'Диагноз основной',
			complication: 'Осложнения',
			followingPart: 'Сопутствующий',
		},
		ecgEcho: {
			arrival: 'ЭКГ при поступлении',
			dynamic: 'ЭКГ в динамике',
			ks: 'ЭХО КС',
		},
		xray: {
			crgogk: 'КРГ ОГК',
			crgSkull: 'КРГ Черепа в двух проекциях',
			jointsRoentgenography: 'Рентгенография правого/левого коленного/тазобедренного сустава',
		},
		ct: {
			head: 'РКТ головы',
			ogk: 'РКТ ОГК с контрастированием/без контрастирования',
			obp: 'РКТ ОБП с контрастированием/без контрастирования',
		},
		examination: {
			ophthalmologist: 'Офтальмолог',
			entDoctor: 'ЛОР-Врач',
			urological: 'Уролог',
			physiotherapist: 'Физиотерапевта',
			psychiatric: 'Психиатр',
			surgeon: 'Хирург',
			oncologist: 'Онколог',
			midwife: 'Акушер-Гинеколог/Акушер',
		},
	},

	legends: {
		editPatient: 'Данные пациента',
		editTerm: 'Термин',
		epicrisisInfo: 'Данные эпикриза',
		diagnosisInfo: 'Диагноз',
		ecgEchoInfo: 'ЭКГ & ЭХО',
		usdScopiaInfo: 'УЗИ & -Cкорпия',
		xrayInfo: 'Лучевая диагностика',
		ctInfo: 'Компьютерная томография',
		examinationInfo: 'Осмотр специалистов',
		medicineSelection: 'Рекомендуемые медикаменты',
		medicineTakingRec: 'Рекомендации по применению',
		treatment: 'Информации о лечении',
		recommended: 'Рекомендованно',
		summary: 'В заключении',
		addAnalysis: 'Добавить анализ',
		editAnalysis: 'Изменить анализ',
		analysesSelection: 'Включить анализы',
		analysesEditing: 'Внести анализы',
		chooseDocTemplate: 'Выбор шаблона документа',
		basic: 'Базовый',
		additional: 'Дополнительный',
	},

	hints: {
		dblClickToEdit: 'Двойной щелчок для редактирования',
		ctrlEnterAdd: 'Ctrl + Enter для добавления',
		clickToRemove: 'Нажмите для удаления',
		enterAdd: 'Enter для добавления',
		clickToEdit: 'Редактировать',
		clickToPrint: 'Распечатать',
		departureAtImportant: 'Для распечатки документа эпикриз должен содержать дату выписки.',
	},

	placeholders: {
		search: 'Поиск',
		addName: 'Добавить наименование',
		dictionaries: {
			search: 'Поиск в словарях',
			searchTerm: 'Поиск термина',
			searchSubterm: 'Поиск подтермина',
		},
	},

	regions: [
		{ id: 0, value: 'г. Могилев' },
		{ id: 1, value: 'Могилевский район' },
	],
}

export default descriptions

