import fp from 'lodash/fp'
import Ego from 'utils/validation'

// import enLocale from './en'
import ruLocale from './ru'

Ego.assignMessages(ruLocale.validation)

export default fp.get(fp.placeholder, ruLocale)
