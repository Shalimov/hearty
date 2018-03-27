import fp from 'lodash/fp'
import { inject } from 'mobx-react'
import { compose, withHandlers, mapProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import config from 'config'
import t from 'i18n'
import mapper from 'utils/simple.mapper'

import ShortcutEditorFormComponent from './component'
import shortcutModel, { mapping } from './shortcut.model'

const { userSettings } = config

export default compose(
	inject('applicationStateStore'),
	mapProps(({
		moduleName,
		showCommand,
		applicationStateStore,
		actionId,
		combination,
		command,
		params,
		onSubmit,
	}) => {
		const shortcutModule = applicationStateStore.shortcuts.get(moduleName)
		const availableShortcuts = userSettings.availableShortcuts[moduleName]
		const actionsSequence = [...shortcutModule.actions.values()]
		const currentUserCommandsSet = new Set(fp.map('command', actionsSequence))
		const parametrizedCommands = new Set(fp.map('command', fp.filter('parametrized', availableShortcuts)))
		const filteredCommands = fp.filter(
			({ command, uniq }) => !uniq || !(uniq && currentUserCommandsSet.has(command)),
			availableShortcuts
		)

		return {
			showCommand,
			actionId,
			combination,
			command,
			params,
			moduleName,
			onSubmit,
			parametrizedCommands,
			shortcutModule,
			deniedCombinations: fp.map('combination', actionsSequence),
			availableCommands: fp.map(({ command }) => ({
				label: t(`descriptions.shortcuts.commands.${moduleName}.${command}`),
				value: command,
			}), filteredCommands),
		}
	}),
	withFormModel(shortcutModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, moduleName, actionId, onSubmit }) => () => {
			const formData = mapper(formModel.value, mapping)

			onSubmit(moduleName, {
				...formData,
				params: formData.params.value ? formData.params : undefined,
				_id: actionId,
			})
		},
	})
)(ShortcutEditorFormComponent)
