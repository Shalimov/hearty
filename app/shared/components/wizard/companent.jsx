import React from 'react'
import PropTypes from 'prop-types'

const WizardComponent = ({
	ActiveComponent,
	activeComponentProps,
	componentData,
	wizardData,
	onInternalSubmit,
	onInternalCancel,
}) => (
	<ActiveComponent
		wizardData={wizardData}
		initialValues={componentData}
		onSubmit={onInternalSubmit}
		onCancel={onInternalCancel} 
		{...activeComponentProps} />
)

WizardComponent.propTypes = {
	wizardData: PropTypes.shape(),
	componentData: PropTypes.shape(),
	activeComponentProps: PropTypes.shape(),
	ActiveComponent: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default WizardComponent
