import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import WizardPager from './components/wizardPager'

const WizardComponent = ({
	ActiveComponent,
	activeComponentProps,
	componentData,
	currentStep,
	steps,
	wizardData,
	onSetStep,
	onInternalSubmit,
	onInternalCancel,
	onPagerStepForward,
	onPagerStepBack,
	...props
}) => (
	<Fragment>
		<WizardPager
			steps={steps}
			currentStep={currentStep}
			onStepForward={onPagerStepForward}
			onStepBack={onPagerStepBack}
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
	steps: PropTypes.any,
	ActiveComponent: PropTypes.func.isRequired,
	onSetStep: PropTypes.func.isRequired,
	onPagerStepForward: PropTypes.func.isRequired,
	onPagerStepBack: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default WizardComponent
