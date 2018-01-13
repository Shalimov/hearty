import fp from 'lodash/fp'

export const createPrefix = (prefix, endpoints) => fp.flow(
	fp.entries,
	fp.map(([key, fn]) => {
		const safeFn = fp.isString(fn) ? fp.constant(fn) : fn
		
		if (fp.isFunction(prefix)) {
			return [
				key,
				(...rest) => {
					const prefixArgs = rest.splice(0, prefix.length)
					return `${prefix(...prefixArgs)}${safeFn(...rest)}`
				},
			]
		}
		
		return [key, (...args) => `${prefix}${safeFn(...args)}`]
	}),
	fp.fromPairs
)(endpoints)
