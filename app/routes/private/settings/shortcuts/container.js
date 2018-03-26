import fp from 'lodash/fp'
import { compose, mapProps } from 'recompose'
import { inject } from 'mobx-react'

import ShortcutsComponent from './component'

export default compose(
	inject('applicationStateStore'),
	mapProps(({ applicationStateStore }) => {
		const { shortcuts } = applicationStateStore

		const shotcutsMapValues = [...shortcuts.values()]
		const shorcutsSections = fp.map(({ moduleName, actions }) => ({
			actions: [...actions.values()],
			moduleName,
		}), shotcutsMapValues)

		return {
			shorcutsSections,
		}
	})
)(ShortcutsComponent)
