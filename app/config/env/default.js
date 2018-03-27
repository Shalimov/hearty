import { TEXTAREA, MODULES } from 'constants/shortcuts.commands'

export default {
	api: {
		url: location.origin,
	},

	userSettings: {
		availableShortcuts: {
			textarea: [
				{ command: TEXTAREA.EXPAND_AREA, uniq: true, parametrized: false },
				{ command: TEXTAREA.NEXT_OCCURENCE, uniq: true, parametrized: false },
				{ command: TEXTAREA.DEFINED_PASTE, uniq: false, parametrized: true },
			],
		},
		defaultShortcuts: {
			textarea: {
				moduleName: MODULES.TEXTAREA,
				actions: {
					'CTRL+F': {
						_id: 'hr7z5gjlx7',
						combination: 'CTRL+F',
						command: TEXTAREA.EXPAND_AREA,
					},
					'CTRL+TAB': {
						_id: 'fpfs44ozev',
						combination: 'CTRL+TAB',
						command: TEXTAREA.NEXT_OCCURENCE,
					},
					'CTRL+D': {
						_id: '55672ejhreo',
						combination: 'CTRL+D',
						command: TEXTAREA.DEFINED_PASTE,
						params: {
							value: '<(*_*)>',
						},
					},
				},
			},
		},
	},
}
