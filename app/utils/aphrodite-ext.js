import fp from 'lodash/fp'
import { css } from 'aphrodite'

const cssx = (meta, styles) => {
	const stylesToApply = fp.flow(
		fp.entries,
		fp.filter(([, isUsed]) => isUsed),
		fp.map(([key]) => styles[key])
	)(meta)

	return css(...stylesToApply)
}

cssx.bindWith = styles => meta => cssx(meta, styles)

export { css, cssx }
export const join = (...args) => args.join(' ')

