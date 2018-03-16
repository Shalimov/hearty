import fp from 'lodash/fp'
import moment from 'moment'

export const omitRecoursive = (fields, values) => {
	const fifo = [values]

	do {
		const src = fifo.shift()

		for (const key in src) {
			const node = src[key]
			const isNode = !(moment.isDate(node) || moment.isMoment(node)) && fp.isObject(node)
			
			if (isNode) {
				src[key] = Array.isArray(node) ? node : fp.omit(fields, node)
				fifo.unshift(src[key])
			}
		}
	} while (fifo.length !== 0)

	return fp.omit(fields, values)
}
