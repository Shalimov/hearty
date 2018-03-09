import React from 'react'
import PropTypes from 'prop-types'
import Toggle from 'react-toggle'

const ToggleComponent = ({
	id,
	title,
	disabled,
	value,
	onInternalChange,
	onBlur,
}) => (
	<Toggle
		id={id}
		title={title}
		disabled={disabled}
		defaultChecked={value || false}
		onBlur={onBlur}
		onChange={onInternalChange}
	/>
)

ToggleComponent.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.any,
	onInternalChange: PropTypes.func,
	onBlur: PropTypes.func,
}

export default ToggleComponent
