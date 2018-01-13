import fp from 'lodash/fp'

import defaultConfig from './env/default'

// eslint-disable-next-line
const envConfig = require(`./env/__ENV__`).default;

export default fp.mergeWith((defValue, srcValue) => {
	if (srcValue === '' || srcValue === undefined) {
		return defValue
	}
}, defaultConfig, envConfig)
