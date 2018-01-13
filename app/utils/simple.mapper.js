import fp from 'lodash/fp'

const createReducer = (source, ignoreNullable, opposite) =>
	(destination, [propFrom, propTo, defaultValue = null]) => {
		// If propTo null then assume to use propFrom as targetProp
		if (opposite) {
			const buffer = fp.isUndefined(propTo) ? propFrom : propTo
			propTo = propFrom
			propFrom = buffer
		}

		const targetPropTo = fp.isUndefined(propTo) ? propFrom : propTo
		const value = fp.getOr(defaultValue, propFrom, source)

		if (ignoreNullable && value === null) {
			return destination
		}

		return fp.set(targetPropTo, value, destination)
	}

const mapper = (source, mapping, ignoreNullable = false) =>
	mapping.reduce(createReducer(source, ignoreNullable, false), {})

mapper.opposite = (source, mapping, ignoreNullable = false) =>
	mapping.reduce(createReducer(source, ignoreNullable, true), {})

export default mapper
