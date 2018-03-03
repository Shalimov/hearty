import React from 'react'
import { cssx } from 'utils/aphrodite-ext'

import styles from '../styles'

const EMPTY_STRING = ''
const join = (...classNames) => classNames.join(' ')

/* eslint-disable */
const defaultRenderer = ({
	id,
	title,
	className,
	disabled,
	readOnly,
	strictHigh,
	showError,
	flexible,
	inlined,
	noBorder,
	type = 'text',
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onInternalKeyDown,
	onBlur,
}) => (
	<input
		id={id}
		title={title}
		type={type}
		className={
			join(
				cssx({
					input: true,
					inlined,
					strictHigh,
					noBorder,
					flexible,
					inputError: showError,
				}, styles),
				className
			)
		}
		readOnly={readOnly}
		placeholder={placeholder}
		autoComplete={autoComplete}
		disabled={disabled}
		value={value || EMPTY_STRING}
		onKeyDown={onInternalKeyDown}
		onBlur={onBlur}
		onChange={onInternalChange} />
)
/* eslint-enable */

export default defaultRenderer
