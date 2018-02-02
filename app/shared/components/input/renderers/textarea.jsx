import React from 'react'
import { cssx } from 'utils/aphrodite-ext'

import styles from '../styles'

const EMPTY_STRING = ''
const join = (...classNames) => classNames.join(' ')

/* eslint-disable */
const textareaRenderer = ({
	id,
	title,
	className,
	disabled,
	readOnly,
	showError,
	flexible,
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
					flexible,
					inputError: showError,
				}, styles),
				className
			)
		}
		rows={rows}
		readOnly={readOnly}
		placeholder={placeholder}
		disabled={disabled}
		value={value || EMPTY_STRING}
		onKeyDown={onInternalKeyDown}
		onBlur={onBlur}
		onChange={onInternalChange}>
	</textarea>
)
/* eslint-enable */

export default textareaRenderer
