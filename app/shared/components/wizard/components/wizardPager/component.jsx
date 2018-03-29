import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'

import styles from './styles'

const getWizardStepName = fp.flow(
	item => Array.isArray(item) ? item[0] : item,
	fp.prop('wizardStepName'),
)

const isFirstStep = currentStep => currentStep === 0
const isLastStep = (steps, currentStep) => steps.length - 1 === currentStep

const WizardPagerComponent = ({
	availableStepSelection,
	steps,
	currentStep,
	onSetStep,
	onNext,
	onPrev,
}) => (
	<div className={css(styles.pager)}>
		<Button
			iconed
			disabled={isFirstStep(currentStep)}
			className={css(styles.leftArrow)}
			onClick={onPrev}>
			<FontAwesome name="chevron-left" />
		</Button>
		<ul className={css(styles.pageIndicatorList)}>
			{
				fp.times(index => (
					<li
						data-title={getWizardStepName(steps[index])}
						key={`page-${index}`}
						className={cssx({
							pageIndicator: true,
							current: currentStep === index,
							rest: currentStep < index,
							selectable: availableStepSelection,
						}, styles)}
						onClick={() => { onSetStep(index) }}>
						{fp.padCharsStart('0', 2, index + 1)}
					</li>
				), steps.length)
			}
		</ul>
		<Button
			iconed
			disabled={isLastStep(steps, currentStep)}
			onClick={onNext}>
			<FontAwesome name="chevron-right" />
		</Button>
	</div>
)

WizardPagerComponent.propTypes = {
	steps: PropTypes.any,
	availableStepSelection: PropTypes.bool,
	currentStep: PropTypes.number.isRequired,
	onSetStep: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
}

export default WizardPagerComponent
