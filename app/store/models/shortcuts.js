import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { STORAGE_KEYS } from 'constants/storage.keys'
import config from 'config'

const { defaultUserSettings } = config

const ShortcutModuleActionParamsScheme = {
	value: types.string,
}

const ShortcutModuleActionsScheme = {
	binding: types.string,
	command: types.string,
	params: types.maybe(
		types.union(
			types.model(ShortcutModuleActionParamsScheme)
		)
	),
}

const ShortcutModulesModelScheme = {
	moduleName: types.identifier(),
	actions: types.map(types.model(ShortcutModuleActionsScheme)),
}

const ShortcutsModelScheme = {
	shortcuts: types.maybe(
		types.map(types.model(ShortcutModulesModelScheme))
	),
}

const ShortcutsModel = types.model('ShortcutsModel', ShortcutsModelScheme)

const createShortcutsModel = (permanentStoarge) => types.model({
	shortcuts: types.maybe(
		types.map(types.model(ShortcutModulesModelScheme))
	),
}).actions(self => ({
	saveHotkeysToStorage() {
		const { loggedUser } = self
		const userId = loggedUser._id

		const key = `${STORAGE_KEYS.SHORTCUTS}:${userId}`
		const userShortcuts = getSnapshot(self.shortcuts)
		permanentStoarge.setItem(key, JSON.stringify(userShortcuts))
	},

	loadHotkeysFromStorage(userId) {
		const key = `${STORAGE_KEYS.SHORTCUTS}:${userId}`

		const rawShortcuts = permanentStoarge.getItem(key)
		const userShortcuts = rawShortcuts ?
			JSON.parse(rawShortcuts) :
			defaultUserSettings.shortcuts

		self.shortcuts = {}
		applySnapshot(self.shortcuts, userShortcuts)
	},
}))

export default ShortcutsModel
export { createShortcutsModel }
