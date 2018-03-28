import React from 'react'
import Select, { Async, AsyncCreatable } from 'react-select'
import { cssx, join } from 'utils/aphrodite-ext'

import styles from '../styles'

/* eslint-disable */
const createRenderer = Component => ({
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
	<Component
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
			target: { value },
		})}
	/>
)

const selectRenderer = createRenderer(Select)
const asyncSelectRenderer = createRenderer(Async)
const asyncCreatableSelectRenderer = createRenderer(AsyncCreatable)
/* eslint-enable */

export default selectRenderer
export { asyncSelectRenderer, asyncCreatableSelectRenderer }
