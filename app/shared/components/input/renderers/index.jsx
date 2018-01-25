import React from 'react'
import { cssx } from 'utils/aphrodite-ext'

import styles from '../styles'

const EMPTY_STRING = ''
const join = (...classNames) => classNames.join(' ')

/* eslint-disable */
const defaultRenderer = ({
	id,
	className,
	disabled,
	readOnly,
	strictHigh,
	showError,
	type = 'text',
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onBlur,
}) => (
	<input
		id={id}
		type={type}
		className={
			join(
				cssx({
					input: true,
					strictHigh: strictHigh,
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
		onBlur={onBlur}
		onChange={onInternalChange} />
)
/* eslint-enable */

export default defaultRenderer
