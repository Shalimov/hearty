import React from 'react'
import PropTypes from 'prop-types'
import { cssx, join } from 'utils/aphrodite-ext'

import localStyles from './styles'
import globalStyles from '../../styles'

const TextareaComponent = ({
	id,
	title,
	className,
	disabled,
	readOnly,
	showError,
	flexible,
	expandable,
	isExpanded,
	noBorder,
	value,
	rows,
	placeholder,
	onInternalKeyDown,
	onInternalBlur,
	onChange,
}) => (
	<textarea
		id={id}
		title={title}
		className={
			join(
				cssx({
					input: true,
					noBorder,
					flexible,
					inputError: showError,
				}, globalStyles),
				cssx({
					expandable,
					expandedArea: isExpanded,
				}, localStyles),
				className
			)
		}
		rows={rows}
		readOnly={readOnly}
		placeholder={placeholder}
		disabled={disabled}
		value={value}
		onKeyDown={onInternalKeyDown}
		onBlur={onInternalBlur}
		onChange={onChange}>
	</textarea>
)

TextareaComponent.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	expandable: PropTypes.bool,
	isExpanded: PropTypes.bool,
	readOnly: PropTypes.bool,
	showError: PropTypes.bool,
	flexible: PropTypes.bool,
	noBorder: PropTypes.bool,
	value: PropTypes.any,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	onInternalKeyDown: PropTypes.func.isRequired,
	onInternalBlur: PropTypes.func,
	onChange: PropTypes.func,
}

export default TextareaComponent
