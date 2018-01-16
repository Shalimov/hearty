import { types, getRoot } from 'mobx-state-tree'

// const { userService } = services

const nullableStringType = types.maybe(types.string)

// Think how to hide tenantId until it is got as snapshot
const UserModelScheme = {
	id: types.identifier(),
	email: types.string,
	userName: types.string,
	firstName: nullableStringType,
	lastName: nullableStringType,
	phoneNumber: types.string,
	creationDate: types.Date,
	tenantId: types.string,
	tenantName: types.string,
	userType: types.string,
}

const UserModel = types.model('UserModel', UserModelScheme).actions(self => ({
	applyChanges(changes) {
		Object.assign(self, changes)
	},
})).views(self => ({
	get tenant() {
		const { tenants } = getRoot(self)
		return tenants.get(self.tenantId)
	},
}))

export default UserModel
