export default {
	api: {
		url: location.origin,
	},

	userSettings: {
		availableShortcuts: {
			textarea: [
				{ command: 'expandArea', uniq: true },
				{ command: 'nextOccurence', uniq: true },
				{ command: 'definedPaste', uniq: false },
			],
		},
		defaultShortcuts: {
			textarea: {
				moduleName: 'textarea',
				actions: {
					'CTRL+F': {
						binding: 'CTRL+F',
						command: 'expandArea',
					},
					'CTRL+TAB': {
						binding: 'CTRL+TAB',
						command: 'nextOccurence',
					},
					'CTRL+D': {
						binding: 'CTRL+D',
						command: 'definedPaste',
						params: {
							value: '<(*_*)>',
						},
					},
				},
			},
		},
	},
}
