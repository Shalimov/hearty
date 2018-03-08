import React from 'react'

import Textarea from '../components/textarea'

const EMPTY_STRING = ''

/* eslint-disable */
const textareaRenderer = ({
	value,
	onInternalChange,
	onInternalKeyDown,
	...params,
}) => (
	<Textarea
		{...params}
		value={value || EMPTY_STRING}
		onKeyDown={onInternalKeyDown}
		onChange={onInternalChange} />
)
/* eslint-enable */

export default textareaRenderer
