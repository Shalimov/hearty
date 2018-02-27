import React from 'react'
import Select from 'react-select'
import { cssx } from 'utils/aphrodite-ext'

import styles from '../styles'

const join = (...classNames) => classNames.join(' ')

/* eslint-disable */
const selectRenderer = ({
	id,
	className,
	disabled,
	underlined,
	readOnly,
	strictHigh,
	flexible,
	noBorder,
	showError,
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onBlur,
	...props
}) => (
		<Select
			placeholder=""
			{...props}
			inputProps={{
				id,
				placeholder,
				autoComplete,
				readOnly,
				disabled,
			}}
			className={join(
				cssx({
					select: true,
					strictHigh,
					noBorder,
					flexible,
					inputError: showError,
				}, styles),
				className
			)}
			value={value}
			onBlur={onBlur}
			onChange={value => onInternalChange({
				target: { value }
			})}
		/>
	)
/* eslint-enable */

export default selectRenderer
