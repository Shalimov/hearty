export default {
	api: {
		url: location.origin,
	},

	defaultUserSettings: {
		shortcuts: {
			'textarea': {
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
