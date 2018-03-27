import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'

import ShortcutComponent from './component'

export default compose(
	withHandlers({
		onInternalKeyDown: ({ deniedCombinations, onChange }) => (event) => {
			const key = event.key.toLowerCase()
			const isPossibleHotkey = event.ctrlKey ||
				(event.altKey && key !== 'alt') ||
				(event.shiftKey && key !== 'shift')

			if (!isPossibleHotkey || key === 'control') {
				return undefined
			}

			const combination = []

			if (event.ctrlKey) {
				combination.push('CTRL')
			}

			if (event.altKey) {
				combination.push('ALT')
			}

			if (event.shiftKey) {
				combination.push('SHIFT')
			}

			combination.push(event.key.toUpperCase())

			const uniqCombination = fp.uniq(combination)
			const stringCombination = combination.join('+')

			const isDenied = fp.includes(stringCombination, deniedCombinations)

			if (uniqCombination.length === combination.length && !isDenied) {
				const input = event.target
				input.value = stringCombination
				
				if (onChange) {
					onChange(event)
				}
			}
		},
	})
)(ShortcutComponent)
