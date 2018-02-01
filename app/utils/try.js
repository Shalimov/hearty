import fp from 'lodash/fp'
import log from 'utils/logger'
import { toast } from 'react-toastify'

export const tryAsync = (handler, printError = fp.get('message')) =>
	async (...args) => {
		let result

		try {
			result = await handler(...args)
		} catch (err) {
			toast.error(printError(err))
			log.error(err)
		}

		return result
	}
