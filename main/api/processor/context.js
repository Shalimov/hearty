const fp = require('lodash/fp')

const SELF = Symbol('self')

class QueryContext {
	constructor() {
		this.sealed = new Set()
		this.context = new Map()
		this[SELF] = this
	}

	static create(initialValues, sealed) {
		const context = new QueryContext()
		context.assign(initialValues, sealed)
		
		return new Proxy(context, {
			get(target, prop) {
				if (fp.isFunction(target[prop]) || prop === SELF) {
					return target[prop]
				}

				return target.context.get(prop)
			},

			set() {
				throw new Error('use a #set method instead of a direct accessor')
			},
		})
	}

	assign(plainObject, sealed) {
		fp.flow(
			fp.entries,
			fp.each(([key, value]) => this[SELF].set(key, value, sealed))
		)(plainObject)
	}

	seal(key) {
		this[SELF].sealed.add(key)
	}

	isSealed(key) {
		return this[SELF].sealed.has(key)
	}

	get(key) {
		return this[SELF].context.get(key)
	}

	set(key, value, sealed = false) {
		if (this[SELF].isSealed(key)) {
			throw new Error(`${key} is sealed and can not be rewritten`)
		}

		this[SELF].context.set(key, value)

		if (sealed) {
			this[SELF].seal(key)
		}
	}
}


module.exports = QueryContext
