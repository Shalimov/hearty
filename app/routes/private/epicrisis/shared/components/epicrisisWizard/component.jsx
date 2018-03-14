import React from 'react'
import PropTypes from 'prop-types'
import { Wizard } from 'shared/components'
import { css } from 'aphrodite'

import WizardPager from './components/wizardPager'
import styles from './styles'

const EpicrisisWizardComponent = ({
	items,
	initialValues = {},
	currentStep,
	stepSelection,
	onContainerRef,
	onWizardWillMount,
	onExternalSetStep,
	onInternalSubmit,
	onStepChanged,
	onCancel,
}) => (
	<div ref={onContainerRef} className={css(styles.epicrisisContainer)}>
		<WizardPager
			stepSelection={stepSelection}
			currentStep={currentStep}
			pagesCount={items.length}
			onExternalSetStep={onExternalSetStep} />
		<Wizard
			onWillMount={onWizardWillMount}
			startStep={currentStep}
			items={items}
			onStepChanged={onStepChanged}
			initialValues={initialValues}
			onSubmit={onInternalSubmit}
			onCancel={onCancel} />
	</div>
)

EpicrisisWizardComponent.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.arrayOf(PropTypes.any),
		])
	),
	initialValues: PropTypes.shape(),
	stepSelection: PropTypes.bool,
	currentStep: PropTypes.number.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onStepChanged: PropTypes.func.isRequired,
	onContainerRef: PropTypes.func.isRequired,
	onExternalSetStep: PropTypes.func.isRequired,
	onWizardWillMount: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EpicrisisWizardComponent
