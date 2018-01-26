import fp from 'lodash/fp'
import Ego from 'utils/validation'

// import enLocale from './en'
import ruLocale from './ru'

Ego.assignMessages(ruLocale.validation)

const translate = fp.get(fp.placeholder, ruLocale)

export default translate
export const tp = (descriptor, params) => {
	const result = fp.find(params, translate(descriptor))
	return result ? result.value : result
}
