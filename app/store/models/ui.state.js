import { types } from 'mobx-state-tree'

const createDefer = () => {
	const defer = {}

	defer.promise = new Promise((resolve, reject) => {
		defer.resolve = resolve
		defer.reject = reject
	})

	return defer
}

const UiStateModelScheme = {
	dictionaryDialogStateOpen: types.optional(types.boolean, false),
}

const UiStateModel = types.model('UiStateModel', UiStateModelScheme).actions(self => {
	let defer = null

	return {
		setDictionaryDialogStateOpen() {
			self.dictionaryDialogStateOpen = true
			defer = createDefer()
			return defer.promise
		},

		setDictionaryDialogStateClose(data) {
			self.dictionaryDialogStateOpen = false
			defer.resolve(data)
		},
	}
})

export default UiStateModel
