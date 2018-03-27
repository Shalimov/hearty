import React from 'react'

import Shortcut from '../components/shortcut'

const EMPTY_STRING = ''

/* eslint-disable */
const shortcutRenderer = ({
	value,
	onInternalChange,
	onInternalKeyDown,
	...params,
}) => (
	<Shortcut
		{...params}
		value={value || EMPTY_STRING}
		onKeyDown={onInternalKeyDown}
		onChange={onInternalChange} />
)
/* eslint-enable */

export default shortcutRenderer
