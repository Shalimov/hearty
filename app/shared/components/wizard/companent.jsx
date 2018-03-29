import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import WizardPager from './components/wizardPager'

const WizardComponent = ({
	ActiveComponent,
	availableStepSelection,
	activeComponentProps,
	componentData,
	currentStep,
	steps,
	wizardData,
	onSetStep,
	onInternalSubmit,
	onInternalCancel,
	...props
}) => (
	<Fragment>
		<WizardPager
			availableStepSelection={availableStepSelection}
			steps={steps}
			currentStep={currentStep}
			onNext={onInternalSubmit}
			onPrev={onInternalCancel}
			onSetStep={onSetStep} />
		<ActiveComponent
			{...props}
			wizardData={wizardData}
			initialValues={componentData}
			onSubmit={onInternalSubmit}
			onCancel={onInternalCancel}
			{...activeComponentProps} />
	</Fragment>
)

WizardComponent.propTypes = {
	wizardData: PropTypes.shape(),
	componentData: PropTypes.shape(),
	activeComponentProps: PropTypes.shape(),
	currentStep: PropTypes.number.isRequired,
	availableStepSelection: PropTypes.bool,
	steps: PropTypes.any,
	ActiveComponent: PropTypes.func.isRequired,
	onSetStep: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default WizardComponent
