import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'

import styles from './styles'

const getWizardStepName = fp.flow(
	item => Array.isArray(item) ? item[0] : item,
	fp.prop('wizardStepName'),
)

const WizardPagerComponent = ({
	availableStepSelection,
	steps,
	currentStep,
	onSetStep,
}) => (
	<div className={css(styles.pager)}>
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
	</div>
)

WizardPagerComponent.propTypes = {
	steps: PropTypes.any,
	availableStepSelection: PropTypes.bool,
	currentStep: PropTypes.number.isRequired,
	onSetStep: PropTypes.func.isRequired,
}

export default WizardPagerComponent
