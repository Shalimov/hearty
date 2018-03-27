import fp from 'lodash/fp'
import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { STORAGE_KEYS } from 'constants/storage.keys'
import config from 'config'

const { userSettings } = config

const genId = () => Math.random().toString(36).substr(2, 10)

const ShortcutModuleActionParamsScheme = {
	value: types.string,
}

const ShortcutModuleActionsScheme = {
	_id: types.string,
	combination: types.identifier(),
	command: types.string,
	params: types.maybe(
		types.union(
			types.model(ShortcutModuleActionParamsScheme)
		)
	),
}

const ShortcutModuleActionModel =  types.model(ShortcutModuleActionsScheme)
	.preProcessSnapshot(snapshot => ({
		...snapshot,
		_id: snapshot._id || genId(),
	}))

const ShortcutModulesModelScheme = {
	moduleName: types.identifier(),
	actions: types.map(ShortcutModuleActionModel),
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
	addHotkeyToModule(moduleName, action) {
		const shortcutModule = self.shortcuts.get(moduleName)
		shortcutModule.actions.put(action)

		self.saveHotkeysToStorage()
	},

	updateHotkeyInModule(moduleName, action) {
		const shortcutModule = self.shortcuts.get(moduleName)
		const storedAction = fp.find({ _id: action._id }, [...shortcutModule.actions.values()])
		shortcutModule.actions.delete(storedAction.combination)
		shortcutModule.actions.put(action)
		
		self.saveHotkeysToStorage()
	},

	removeHotkeyInModule(moduleName, actionId) {
		const shortcutModule = self.shortcuts.get(moduleName)
		const storedAction = fp.find({ _id: actionId }, [...shortcutModule.actions.values()])
		shortcutModule.actions.delete(storedAction.combination)
		
		self.saveHotkeysToStorage()
	},
	
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
			userSettings.defaultShortcuts

		self.shortcuts = {}
		applySnapshot(self.shortcuts, userShortcuts)
	},
}))

export default ShortcutsModel
export { createShortcutsModel }
