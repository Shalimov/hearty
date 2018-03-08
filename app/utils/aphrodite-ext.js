import fp from 'lodash/fp'
import { css } from 'aphrodite'

export { css }
export const join = (...args) => args.join(' ')
export const cssx = (meta, styles) => {
	const stylesToApply = fp.flow(
		fp.entries,
		fp.filter(([, isUsed]) => isUsed),
		fp.map(([key]) => styles[key])
	)(meta)

	return css(...stylesToApply)
}
