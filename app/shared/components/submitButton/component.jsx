import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'shared/components'

const SubmitButtonComponent = ({
	form,
	children,
	behaviour,
	isSubmitting,
	onInternalSubmit,
	...props
}) => (
	<Button
		disabled={(behaviour === 'invalid-disabled' && form.isInvalid) || isSubmitting}
		onClick={onInternalSubmit}
		{...props}>
		{children}
	</Button>
)

SubmitButtonComponent.propTypes = {
	form: PropTypes.shape().isRequired,
	isSubmitting: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	behaviour: PropTypes.string,
}

export default observer(SubmitButtonComponent)
