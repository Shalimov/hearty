import React from 'react'
import PropTypes from 'prop-types'
import { cssx, join } from 'utils/aphrodite-ext'

import styles from '../../styles'

const ShortcutComponent = ({
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
	value,
	autoComplete,
	placeholder,
	onInternalKeyDown,
	onBlur,
}) => (
	<input
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
		readOnly={readOnly}
		placeholder={placeholder}
		autoComplete={autoComplete}
		disabled={disabled}
		value={value}
		onKeyDown={onInternalKeyDown}
		onBlur={onBlur} />
)

ShortcutComponent.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	strictHigh: PropTypes.bool,
	showError: PropTypes.bool,
	flexible: PropTypes.bool,
	inlined: PropTypes.bool,
	noBorder: PropTypes.bool,
	value: PropTypes.string,
	autoComplete: PropTypes.string,
	placeholder: PropTypes.string,
	onInternalKeyDown: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func,
	onBlur: PropTypes.func,
}

export default ShortcutComponent
