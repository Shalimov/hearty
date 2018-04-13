import validation from './ru.validation'

const descriptions = {
	validation: validation,

	errors: {
		server: {
			'auth-wrong-password-email': 'Адрес почты либо пароль введены неверно',
			'base-record-not-found': 'Запись не найдена',
			'base-bad-data': 'Данные для сервера содержат ошибки',
			'internal-server': 'В процессе обработки произошли ошибки, обратитесь к администратору.',
		},
		epicrisis: {
			epicNo: 'Номер эпикриза должен содержать только цифры и предусматривает наличие разделительных символов - или |',
			validation: 'На форме есть неточности. Проверьте пожалуйста все введенные данные.',
		},
		noAnalyses: 'Для заполнения выписки как правило необходимо иметь как минимум один анализ в графе анализы.',
		noMedicine: 'Для заполнения выписки как правило необходимо иметь как минимум одно лекарственное средство в графе лекарства.',
	},

	toasts: {
		dictionary: {
			saved: 'Сохранено в словаре',
		},

		forms: {
			preventTransition: 'Все ваши измненения не будут сохранены. Вы уверены что хотите перейти?',
		},
	},

	common: {
		createTerm: 'Создать термин',
		findExistingTerm: 'Найти существующий термин',
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

		captions: {
			shortcuts: {
				textarea: 'Редактор текста',
			},
		},
	},

	contextMenu: {
		pasteFromDictionary: 'Вставить из словаря',
		storeInDictionary: 'Сохранить в словаре',
	},

	headers: {
		welcome: 'Добро пожаловать',
		forgotPassword: 'Забыли пароль',
		analyses: 'Анализы',
		epicrises: 'Эпикризы',
		medicine: {
			groups: 'Группы лекарств',
		},
		dictionary: 'Словарь терминов',
		basic: 'Базовые',
		additional: 'Дополнительные',
		shortcuts: {
			index: 'Горячие клавиши',
			key: 'Комбинация',
			command: 'Комманда',
			extra: 'Дополнительно',
		},
	},

	descriptions: {
		epicrisisAnalysesExcluded: 'Анализы были исключены на предыдущем шаге, данных для заполнения нет.',
		epicrisisMedicineExcluded: 'Лекарства были исключены на предыдущем шаге, данных для заполнения нет.',
		epicrises: 'Здесь вы можете просмотреть все заведённые эпикризы.',
		dictionary: 'В словаре вы можете хранить данные, которые можно будет использовать в процессе заполнения эпикриза.',
		analyses: 'Здесь вы можете ввести шаблоны для анализов, котороые будут доступны при заполнении эпикриза.',
		medicine: {
			groups: 'Здесь вы можете ввести лекарства, которые будут доступны при заполнении эпикриза.',
		},
		fromDictionary: 'Добавить из словаря',
		forgotPassword: 'Если вы забыли пароль то паниковать не стоит, просто введите адрес своей почты и мы поможем вам с восстановлением.',
		welcome: 'Рутина станет незаметной',
		welcomeFeatures: 'Добро пожаловать в Hearty. Данная программа поможет вам справляться с рутинными задачами быстро и без труда, концентрируясь на самом важном',

		shortcuts: {
			commands: {
				textarea: {
					expandArea: 'Увеличить размер',
					nextOccurence: 'Найти ближайшую метку',
					definedPaste: 'Вставить шаблон',
				},
			},
		},
	},

	links: {
		epicrisis: 'Эпикриз',
		signup: 'Регистрация',
		forgotPassword: 'Забыли пароль',
		main: 'Главная',
		dictionary: 'Словарь',
		patients: 'Пациенты',
		analysis: 'Анализы',
		addPatient: 'Добавить пациента',
		addAnalysis: 'Добавить анализ',
		addEpicrisis: 'Добавть эпикриз',
		follow: 'Перейти',
		medicine: {
			groups: 'Группа лекарств',
			addGroup: 'Добавить группу',
		},
	},

	buttons: {
		add: 'Добавить',
		addTerm: 'Добавить термин',
		addSubTerm: 'Добавить подтермин',
		search: 'Найти',
		save: 'Сохранить',
		settings: 'Настройки',
		saveAndPrint: 'Сохранить и распечатать',
		submit: 'Отправить',
		next: 'Далее',
		back: 'Назад',
		signin: 'Войти',
		print: 'Печатать',
		ok: 'Да',
		no: 'Нет',
		logout: 'Выйти',
		epicrisis: {
			openFolder: 'Открыть каталог с выписками',
		},
	},

	labels: {
		epicrisisNo: 'Номер эпикриза',
		email: 'Адрес электронной почты',
		password: 'Пароль',
		fullname: 'ФИО',
		birthdate: 'Год рождения',
		region: 'Город/Регион',
		address: 'Адрес',
		term: 'Термин',
		subTerm: 'Подтермин',
		name: 'Название',
		medicineGroup: 'Название группы лекарств',
		jobInfo: 'Место работы',
		arrivalAt: 'Дата поступления',
		departureAt: 'Дата выписки',
		docTemplate: 'Шаблон документа',
		other: 'Другое',
		recommended: 'Рекомендованно',
		summary: 'Итого',
		type: 'Тип',
		medicine: {
			groups: 'Название групп лекарств',
			priority: 'Приоритет',
			count: 'Кол-во лекарств в группе',
		},
		shortcuts: {
			combination: 'Комбинация',
			command: 'Команда',
			parameters: 'Параметры',
		},
		epicrisis: {
			done: 'Готов к печати',
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
		addToDictionary: 'Добавить в словарь',
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
		shortcuts: {
			editor: 'Нажмите нужную комбинацию для выбора',
		},
	},

	hints: {
		dblClickToEdit: 'Двойной щелчок для редактирования',
		ctrlEnterAdd: 'Ctrl + Enter для добавления',
		clickToRemove: 'Удалить',
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
