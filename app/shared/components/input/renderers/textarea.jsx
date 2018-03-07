import React from 'react'
import fp from 'lodash/fp'
import { cssx } from 'utils/aphrodite-ext'

import styles from '../styles'

const EMPTY_STRING = ''
const join = (...classNames) => classNames.join(' ')

// TODO: Mb it worth to move textarea as standalone component
const SuspendUntilTransition = 250
const onFocusScrollToElement = (event) => {
	const textarea = event.target
	const grandparent = fp.get('parentElement.parentElement', textarea)
	setTimeout(() => {
		fp.invoke('scrollIntoView', grandparent)
	}, SuspendUntilTransition)
}

/* eslint-disable */
const textareaRenderer = ({
	id,
	title,
	className,
	disabled,
	readOnly,
	showError,
	flexible,
	noBorder,
	expandOnFocus,
	value,
	rows,
	placeholder,
	onInternalChange,
	onInternalKeyDown,
	onBlur,
}) => (
	<textarea
		id={id}
		title={title}
		className={
			join(
				cssx({
					input: true,
					noBorder,
					flexible,
					expandOnFocus,
					inputError: showError,
				}, styles),
				className
			)
		}
		rows={rows}
		readOnly={readOnly}
		placeholder={placeholder}
		disabled={disabled}
		onFocus={expandOnFocus && onFocusScrollToElement}
		value={value || EMPTY_STRING}
		onKeyDown={onInternalKeyDown}
		onBlur={onBlur}
		onChange={onInternalChange}>
	</textarea>
)
/* eslint-enable */

export default textareaRenderer
