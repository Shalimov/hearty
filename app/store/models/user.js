import { types } from 'mobx-state-tree'

const UserModelScheme = {
	_id: types.identifier(),
	email: types.string,
	username: types.string,
}

const UserModel = types.model('UserModel', UserModelScheme).actions(self => ({
	applyChanges(changes) {
		Object.assign(self, changes)
	},
}))

export default UserModel
