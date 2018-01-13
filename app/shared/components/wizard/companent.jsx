import React from 'react'
import PropTypes from 'prop-types'

const WizardComponent = ({
	ActiveComponent,
	activeComponentProps,
	componentData,
	onInternalSubmit,
	onInternalCancel,
}) => (
	<ActiveComponent
		initialValues={componentData}
		onSubmit={onInternalSubmit}
		onCancel={onInternalCancel} 
		{...activeComponentProps} />
)

WizardComponent.propTypes = {
	componentData: PropTypes.shape(),
	activeComponentProps: PropTypes.shape(),
	ActiveComponent: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default WizardComponent
