import fp from 'lodash/fp'
import { STORAGE_KEYS } from 'constants/storage.keys'
import { types } from 'mobx-state-tree'

import UserModel from './models/user'
import AuthModel from './models/auth'
import { createShortcutsModel } from './models/shortcuts'

const storage = localStorage

// TODO: think over how to use token for initFromStorage
const ApplicationStateStore = types.compose(
	createShortcutsModel(storage),
	types.model({
		isSigningIn: types.optional(types.boolean, false),
		auth: types.maybe(AuthModel),
		users: types.optional(types.map(UserModel), {}),
	}).actions(self => ({
		init() {
			const token = storage.getItem(STORAGE_KEYS.HEARTY_TOKEN)

			if (token) {
				self.auth = AuthModel.create({
					token,
				})
			}
		},

		signin(token, user) {
			const userModel = UserModel.create(user)

			self.users.set(user._id, userModel)
			self.auth = AuthModel.create({
				token,
				user: user._id,
			})

			self.auth.saveSessionData(storage)
			self.loadHotkeysFromStorage(user._id)
		},

		signout() {
			self.auth.clearSessionData(storage)
			self.auth = null
		},
	})).views(self => ({
		get isSignedIn() {
			const signedIn = fp.get('token', self.auth) && fp.get('user', self.auth)
			return Boolean(!self.isSigningIn && signedIn)
		},

		get authToken() {
			return fp.get('token', self.auth)
		},

		get loggedUser() {
			return self.isSignedIn ? fp.get('user', self.auth) : null
		},
	}))
)

export default ApplicationStateStore
export {
	UserModel,
	AuthModel,
}
