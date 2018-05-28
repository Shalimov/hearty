import React from 'react'
import PropTypes from 'prop-types'
import { cssxi, join } from 'utils/aphrodite-ext'

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
	isExpanded,
	noBorder,
	value,
	rows,
	placeholder,
	inputStyle,
	onInternalKeyDown,
	onInternalBlur,
	onClick,
	onChange,
}) => (
	<textarea
		id={id}
		title={title}
		className={
			join(
				cssxi({
					input: true,
					noBorder,
					flexible,
					inputError: showError,
				}, globalStyles),
				cssxi({
					expandable: true,
					expandedArea: isExpanded,
				}, localStyles),
				className
			)
		}
		style={inputStyle}
		rows={rows}
		readOnly={readOnly}
		placeholder={placeholder}
		disabled={disabled}
		value={value}
		onClick={onClick}
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
	isExpanded: PropTypes.bool,
	readOnly: PropTypes.bool,
	showError: PropTypes.bool,
	flexible: PropTypes.bool,
	noBorder: PropTypes.bool,
	value: PropTypes.any,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	inputStyle: PropTypes.shape(),
	onInternalKeyDown: PropTypes.func.isRequired,
	onInternalBlur: PropTypes.func,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func,
}

export default TextareaComponent
