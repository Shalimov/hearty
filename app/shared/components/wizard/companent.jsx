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
	onInternalSubmit,
	onInternalCancel,
	...props
}) => (
	<Fragment>
		<WizardPager
			currentStep={currentStep}
			pagesCount={steps.length} />
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
	steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	ActiveComponent: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default WizardComponent
