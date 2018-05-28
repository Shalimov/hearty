import fp from 'lodash/fp'
import { css } from 'aphrodite'
import { css as cssi } from 'aphrodite/no-important'

const createXtenstion = fn => (meta, styles) => {
	const stylesToApply = fp.flow(
		fp.entries,
		fp.filter(([, isUsed]) => isUsed),
		fp.map(([key]) => styles[key])
	)(meta)

	return fn(...stylesToApply)
}

const cssx = createXtenstion(css)
const cssxi = createXtenstion(cssi)

cssx.bindWith = styles => meta => cssx(meta, styles)
cssxi.bindWith = styles => meta => cssxi(meta, styles)

export { css, cssx, cssi, cssxi }
export const join = (...args) => args.join(' ')

