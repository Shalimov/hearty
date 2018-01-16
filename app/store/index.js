import fp from 'lodash/fp'
import { types } from 'mobx-state-tree'

import UserModel from './models/user'
import AuthModel from './models/auth'

// const storage = sessionStorage

// TODO: think over how to use token for initFromStorage
const ApplicationStateStore = types.compose(
	// createMappableSection('tenants', 'Tenant', TenantModel, tenantService),
	// createMappableSection('users', 'User', UserModel, userService),
	types.model({
		isSigningIn: types.optional(types.boolean, false),
		auth: types.maybe(AuthModel),
	}).views(self => ({
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
				UserModel,
				AuthModel,
			}
		},
	}))
)

export default ApplicationStateStore
export {
	UserModel,
	AuthModel,
}
