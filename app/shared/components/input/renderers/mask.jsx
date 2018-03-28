import React from 'react'
import { cssx, join } from 'utils/aphrodite-ext'
import InputMask from 'react-input-mask'

import styles from '../styles'

const EMPTY_STRING = ''

/* eslint-disable */
const maskRenderer = ({
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
	mask,
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onInternalKeyDown,
	onKeyPress,
	onBlur,
}) => (
	<InputMask
		id={id}
		title={title}
		type="text"
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
		mask={mask}
		readOnly={readOnly}
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

export default maskRenderer
