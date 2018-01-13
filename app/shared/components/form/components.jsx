import React from 'react'
import PropTypes from 'prop-types'

const hidden = { display: 'none' }
// TODO: Form submitting workaround
const FormComponent = ({ className, children, onIntenalSumbit }) => (
	<form noValidate
		className={className}
		onSubmit={onIntenalSumbit}>
		{children}
		<input type="text" style={hidden} />
	</form>
)

FormComponent.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onIntenalSumbit: PropTypes.func,
}

export default FormComponent
