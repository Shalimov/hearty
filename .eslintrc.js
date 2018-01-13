module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parser": "babel-eslint",
	"plugins": [
		"react"
	],
	"rules": {
		"eol-last": [
			"error",
			"always"
		],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"never"
		],
		"comma-dangle": ["error", "always-multiline"]
	}
};