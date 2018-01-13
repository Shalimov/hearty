import { types, getSnapshot } from 'mobx-state-tree'
import { STORAGE_KEYS } from 'constants/storage.keys'

import UserModel from './user'

const AuthModelScheme = {
	token: types.optional(types.string, ''),
	user: types.maybe(types.reference(UserModel)),
}

const AuthModel = types.model('AuthModel', AuthModelScheme).actions(self => ({
	setUserId(userId) {
		self.user = userId
	},

	saveSessionData(storage) {
		const { token, user } = getSnapshot(self)

		if (token && user) {
			storage.setItem(STORAGE_KEYS.LINIUS_TOKEN, token)
			storage.setItem(STORAGE_KEYS.LINIUS_USER_ID, user)
		}
	},
}))

export default AuthModel
