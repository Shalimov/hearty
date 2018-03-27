import fp from 'lodash/fp'
import { compose, mapProps, withStateHandlers, withHandlers } from 'recompose'
import { inject, observer } from 'mobx-react'

import ShortcutsComponent from './component'

export default compose(
	inject('applicationStateStore'),
	observer,
	mapProps(({ applicationStateStore }) => {
		const { shortcuts } = applicationStateStore

		const shotcutsMapValues = [...shortcuts.values()]
		const shorcutsSections = fp.map(({ moduleName, actions }) => ({
			actions: [...actions.values()],
			moduleName,
		}), shotcutsMapValues)

		return {
			shorcutsSections,
			applicationStateStore,
		}
	}),
	withStateHandlers({
		isEditorOpen: false,
		editorParams: {},
	}, {
		setEditorOpenState: () => isEditorOpen => ({ isEditorOpen }),
		setEditorParams: () => editorParams => ({ editorParams }),
	}),
	withHandlers({
		onRequestClose: ({ setEditorOpenState }) => () => {
			setEditorOpenState(false)
		},

		onSaveHotkey: ({ setEditorOpenState, applicationStateStore }) => 
			(moduleName, data) => {
				const isEditMode = Boolean(data._id)

				if (isEditMode) {
					applicationStateStore.updateHotkeyInModule(moduleName, data)
				} else {
					applicationStateStore.addHotkeyToModule(moduleName, data)
				}
				
				setEditorOpenState(false)
			},

		onRemoveHotkey: ({ applicationStateStore }) => (moduleName, action) => () => {
			applicationStateStore.removeHotkeyInModule(moduleName, action._id)
		},

		onAddHotkey: ({ setEditorOpenState, setEditorParams }) =>
			(moduleName) => () => {
				setEditorOpenState(true)
				setEditorParams({
					moduleName,
					showCommand: true,
				})
			},

		onEditHotkey: ({ setEditorOpenState, setEditorParams }) =>
			(moduleName, action) => () => {
				setEditorOpenState(true)
				setEditorParams({
					moduleName,
					actionId: action._id,
					combination: action.combination,
					command: action.command,
					params: action.params,
					showCommand: false,
				})
			},
	})
)(ShortcutsComponent)
