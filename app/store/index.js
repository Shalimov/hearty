import fp from 'lodash/fp'
import { types, flow } from 'mobx-state-tree'
import services from 'services'
import { STORAGE_KEYS } from 'constants/storage.keys'

import TenantModel from './models/tenant'
import UserModel from './models/user'
import AuthModel from './models/auth'

import { createMappableSection } from './compositors/mappable'

const { authService, userService, tenantService } = services
const storage = sessionStorage

// TODO: think over how to use token for initFromStorage
const ApplicationStateStore = types.compose(
	// createMappableSection('tenants', 'Tenant', TenantModel, tenantService),
	// createMappableSection('users', 'User', UserModel, userService),
	types.model({
		isSigningIn: types.optional(types.boolean, false),
		auth: types.maybe(AuthModel),
	}).actions(self => ({
		signout: flow(function* () {
			try {
				yield authService.signout()
			} catch (err) {
				// TODO: Add logger
			}

			storage.clear()
			self.auth = null
		}),

		signin: flow(function* (username, password) {
			const response = yield authService.signin(username, password)

			if (!response.signedIn) {
				return response
			}

			self.isSigningIn = true

			// Catch and finally used cuz babel ignore finally block sometimes
			try {
				self.auth = AuthModel.create({ token: response.token })

				const user = yield self.loadOneUser(response.userId)
				yield self.loadOneTenant(user.tenantId)
				
				self.auth.setUserId(response.userId)
				self.auth.saveSessionData(storage)
			} catch (err) {
				self.isSigningIn = false
			} finally {
				self.isSigningIn = false
			}

			return response
		}),

		// TODO: fix error handling here
		initFromStorage: flow(function* () {
			const { LINIUS_TOKEN, LINIUS_USER_ID } = STORAGE_KEYS
			const userId = storage.getItem(LINIUS_USER_ID)
			const token = storage.getItem(LINIUS_TOKEN)

			if (!(token && userId)) {
				return self
			}

			self.isSigningIn = true

			try {
				self.auth = AuthModel.create({ token })

				const user = yield self.loadOneUser(userId)
				yield self.loadOneTenant(user.tenantId)

				self.auth.setUserId(userId)
				self.auth.saveSessionData(storage)
			} catch (err) {
				// TODO: think how to improve that (CORS ISSUE with AWS should be fixed)
				// const UNAUTHORIZED = 401
				const NET_ERROR = 'Network Error'

				if (err.message === NET_ERROR) { // RIGHT: if (err.status === UNAUTHORIZED) {
					storage.clear()
					self.auth = null
				}

				self.isSigningIn = false
			} finally {
				self.isSigningIn = false
			}

			return self
		}),
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

		// Expiremental
		get models() {
			return {
				TenantModel,
				UserModel,
				AuthModel,
			}
		},
	}))
)

export default ApplicationStateStore
export {
	TenantModel,
	UserModel,
	AuthModel,
}
