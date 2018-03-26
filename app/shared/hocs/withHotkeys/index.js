import fp from 'lodash/fp'
import { compose, withHandlers, withProps } from 'recompose'
import { inject } from 'mobx-react'
import { isHotkey } from 'is-hotkey'
import log from 'utils/logger'

const toExpectedActionName = (name) => {
	if (!name.startsWith('on')) {
		throw new Error(`[withHotkeys] ${name} should starts with 'on'`)
	}

	const expectedName = name.substring(2)
	return fp.lowerFirst(expectedName)
}

const toAction = ([key, value]) => [toExpectedActionName(key), value]

const toHandlersMap = fp.flow(
	fp.entries,
	fp.map(toAction),
	fp.fromPairs
)

export default (moduleName, rawHandlersMap, options) => {
	if (!fp.isString(moduleName)) {
		throw new Error('[withHotkeys:hoc] module name is required')
	}

	const handlersMap = toHandlersMap(rawHandlersMap)

	const { handlerName, shortcutPropName } = Object.assign({
		handlerName: 'onHotkey',
		shortcutPropName: 'activeShortcuts',
	}, options)

	return compose(
		inject('applicationStateStore'),
		withProps(({ applicationStateStore }) => ({
			[shortcutPropName]: applicationStateStore.shortcuts.get(moduleName),
		})),
		withHandlers({
			[handlerName]: (props) => {
				const { shortcuts } = props.applicationStateStore

				if (!shortcuts.has(moduleName)) {
					log.warn(`No such shortcut module ${moduleName} handlers `)
					return fp.noop
				}

				const moduleShortcutsMap = shortcuts.get(moduleName)
				const shortcutEntries = [...moduleShortcutsMap.actions.values()]

				return (event) => {
					const action = shortcutEntries.find(({ binding }) => isHotkey(binding, event))

					if (!action) {
						return undefined
					}

					const handler = handlersMap[action.command]

					if (!handler) {
						log.warn(`No such action handler for ${moduleName}#${action.command}!`)
					}

					return handler(props, action.params, event)
				}
			},
		})
	)
}
