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

const isFirstStep = stepNo => stepNo === 0
const isLastStep = (stepNo, stepsCount) => (stepsCount - 1) === stepNo

const WizardPagerComponent = ({
	steps,
	currentStep,
	onStepBack,
	onStepForward,
	onSetStep,
}) => (
	<div className={css(styles.pager)}>
		{
			!isFirstStep(currentStep) && (
				<div className={css(styles.buttonWrapper)}>
					<Button iconed onClick={onStepBack}>
						<FontAwesome name="chevron-left" />
					</Button>
				</div>
			)
		}
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
						}, styles)}
						onClick={() => { onSetStep(index) }}>
						{fp.padCharsStart('0', 2, index + 1)}
					</li>
				), steps.length)
			}
		</ul>
		{
			!isLastStep(currentStep, steps.length) && (
				<div className={css(styles.buttonWrapper)}>
					<Button iconed onClick={onStepForward}>
						<FontAwesome name="chevron-right" />
					</Button>
				</div>
			)
		}
	</div>
)

WizardPagerComponent.propTypes = {
	steps: PropTypes.any,
	currentStep: PropTypes.number.isRequired,
	onStepBack: PropTypes.func.isRequired,
	onStepForward: PropTypes.func.isRequired,
	onSetStep: PropTypes.func.isRequired,
}

export default WizardPagerComponent
