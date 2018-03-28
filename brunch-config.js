const GRAPHQL = require('./main/constants/graphql')

const ENV = process.env.BRUNCH_ENV || 'development'
const MAIN_ROOT = 'main'

module.exports = {
	server: {
		port: 8080,
	},

	modules: {
		wrapper: 'commonjs',
		autoRequire: {
			'js/app.js': ['main'],
		},
	},

	files: {
		javascripts: {
			joinTo: {
				'js/vendor.js': /^(?!app)/,
				'js/app.js': /^app/,
			},
		},

		stylesheets: {
			joinTo: 'css/app.css',
		},
	},

	conventions: {
		ignored: path => path.includes('/config/env/')
			&& !(path.endsWith(`${ENV}.js`)
				|| path.endsWith('default.js')),
	},

	npm: {
		globals: {
			regeneratorRuntime: 'regenerator-runtime/runtime.js',
		},
		static: [
			'node_modules/setimmediate/setImmediate.js',
		],
		styles: {
			'font-awesome': ['css/font-awesome.min.css'],
			'react-datetime': ['css/react-datetime.css'],
			'react-select': ['dist/react-select.min.css'],
			'react-table': ['react-table.css'],
			'react-toggle': ['style.css'],
		},
	},

	plugins: {
		// Pre-build replacement
		replacer: {
			dict: [
				// eslint-disable-next-line
				{ key: '__ENV__', value: ENV },
				{ key: '__GRAPHQL:NET__', value: GRAPHQL.NET },
			],
		},
		copycat: {
			[MAIN_ROOT]: 'main',
			fonts: ['node_modules/font-awesome/fonts'],
			verbose: false,
			onlyChanged: true,
		},
		babel: {
			presets: [
				'react',
				['env', {
					targets: {
						browsers: ['last 2 Chrome versions'],
					},
				}],
				'stage-2',
			],
			plugins: [
				'transform-decorators-legacy',
				'graphql-tag',
			],
		},
	},
}
