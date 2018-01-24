import React from 'react'
import DatePicker from 'react-datetime'
import { cssx } from 'utils/aphrodite-ext'

import styles from './styles'

const join = (...classNames) => classNames.join(' ')

/* eslint-disable */
const dateRenderer = ({
	id,
	className,
	disabled,
	readOnly,
	strictHigh,
	showError,
	value,
	autoComplete,
	placeholder,
	onInternalChange,
	onBlur,
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
						strictHigh: strictHigh,
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
