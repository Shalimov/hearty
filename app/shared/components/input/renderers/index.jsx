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
	min,
	max,
	type = 'text',
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onInternalKeyDown,
	onKeyPress,
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
		min={min}
		max={max}
		placeholder={placeholder}
		autoComplete={autoComplete}
		disabled={disabled}
		value={value === undefined ? EMPTY_STRING : value}
		onKeyDown={onInternalKeyDown}
		onKeyPress={onKeyPress}
		onBlur={onBlur}
		onChange={onInternalChange} />
)
/* eslint-enable */

export default defaultRenderer
