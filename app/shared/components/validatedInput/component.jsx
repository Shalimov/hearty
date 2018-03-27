import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

import { Input } from 'shared/components'

const ValidatedInput = ({
	field,
	disabled,
	label,
	onInternalChange,
	...props
}) => (
	<Input {...props}
		id={field.id}
		disabled={disabled || field.readonly}
		label={label === undefined ? field.label : label}
		value={field.value}
		onBlur={field.onBlur}
		showError={field.showError}
		error={field.error}
		onChange={onInternalChange} />
)

ValidatedInput.propTypes = {
	field: PropTypes.shape().isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	strictShort: PropTypes.bool,
	strictLong: PropTypes.bool,
	className: PropTypes.string,
	onInternalChange: PropTypes.func,
	errorRender: PropTypes.func,
}

export default observer(ValidatedInput)
