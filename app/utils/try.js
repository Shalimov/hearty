import fp from 'lodash/fp'
import log from 'utils/logger'
import { toast } from 'react-toastify'
import t, { has } from 'i18n'

export const tryAsync = (handler, getCode = fp.get('message')) =>
	async (...args) => {
		let result

		try {
			result = await handler(...args)
		} catch (err) {
			const code = getCode(err)
			const getFullCode = code => `errors.server.${code}`
			const fullCode = getFullCode(code)
			const safeCode = has(fullCode) ? fullCode : getFullCode('internal-server')

			toast.error(t(safeCode))
			log.error(err)
		}

		return result
	}
