import React from 'react'
import DatePicker from 'react-datetime'
import { cssx, join } from 'utils/aphrodite-ext'

import styles from '../styles'

/* eslint-disable */
const dateRenderer = ({
	id,
	className,
	disabled,
	strictHigh,
	flexible,
	inlined,
	noBorder,
	showError,
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onBlur,
	readOnly = true,
	...props
}) => (
		<DatePicker
			dateFormat="DD/MM/YYYY"
			viewMode="years"
			timeFormat={false}
			closeOnSelect={true}
			{...props}
			inputProps={{
				id,
				placeholder,
				autoComplete,
				readOnly,
				disabled,
				className: join(
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
			}}
			value={value}
			onBlur={onBlur}
			onChange={moment => onInternalChange({ 
				target: { value: moment.toDate() } 
			})}
		/>
	)
/* eslint-enable */

export default dateRenderer
