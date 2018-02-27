import { types } from 'mobx-state-tree'

const UiStateModelScheme = {
	dictionaryDialogStateOpen: types.optional(types.boolean, false),
}

const UiStateModel = types.model('UiStateModel', UiStateModelScheme).actions(self => ({
	setDictionaryDialogStateOpen() {
		self.dictionaryDialogStateOpen = true
	},

	setDictionaryDialogStateClose() {
		self.dictionaryDialogStateOpen = false
	},
}))

export default UiStateModel
