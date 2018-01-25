import React from 'react'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'

import defaultRenderer from './renderers'
import selectRenderer from './renderers/select'
import dateRenderer from './renderers/date'
import styles from './styles'

const join = (...classNames) => classNames.join(' ')

const defaultErrorRender = (error) => (
	<div className={css(styles.errorContainer)}>
		{error.message}
	</div>
)

const rendererProxy = props => {
	switch (props.type) {
	case 'date': return dateRenderer(props)
	case 'select': return selectRenderer(props)
	default: return defaultRenderer(props)
	}
}

const InputComponent = ({
	label,
	strictShort,
	strictLong,
	error,
	errorRender = defaultErrorRender,
	renderComponent = rendererProxy,
	...params
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
			{renderComponent(params)}
			{params.showError && errorRender(error)}
		</div>
	</div>
)

InputComponent.propTypes = {
	label: PropTypes.string,
	strictShort: PropTypes.bool,
	strictLong: PropTypes.bool,
	errorRender: PropTypes.func,
	showError: PropTypes.bool,
	error: PropTypes.shape({ message: PropTypes.string }),
	renderComponent: PropTypes.func,
}

export default InputComponent
