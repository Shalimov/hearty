import React from 'react'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'
import styles from './styles'

const EMPTY_STRING = ''
const join = (...classNames) => classNames.join(' ')

const defaultErrorRender = (error) => (
	<div className={css(styles.errorContainer)}>
		{error.message}
	</div>
)

const InputComponent = ({
	id,
	label,
	className,
	disabled,
	readOnly,
	strictShort,
	strictLong,
	strictHigh,
	type = 'text',
	value,
	autoComplete,
	placeholder,
	showError,
	error,
	errorRender = defaultErrorRender,
	onInternalChange,
	onBlur,
}) => (
	<div className={css(styles.inputContainer)}>
		{label && <label className={css(styles.label)}>{label}</label>}
		<div className={join(
			css(styles.inputWrapper),
			cssx({
				strictShort,
				strictLong,
			}, styles)
		)}>
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
			{showError && errorRender(error)}
		</div>
	</div>
)

InputComponent.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	strictShort: PropTypes.bool,
	strictHigh: PropTypes.bool,
	strictLong: PropTypes.bool,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	errorRender: PropTypes.func,
	value: PropTypes.any,
	autoComplete: PropTypes.string,
	showError: PropTypes.bool,
	error: PropTypes.shape({ message: PropTypes.string }),
	onInternalChange: PropTypes.func,
	onBlur: PropTypes.func,
}

export default InputComponent
