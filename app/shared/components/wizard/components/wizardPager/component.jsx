import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'

import styles from './styles'

const WizardPagerComponent = ({
	currentStep,
	pagesCount,
}) => (
	<div className={css(styles.pager)}>
		<ul className={css(styles.pageIndicatorList)}>
			{
				fp.times(index => (
					<li
						key={`page-${index}`}
						className={cssx({
							pageIndicator: true,
							current: currentStep === index,
							rest: currentStep < index,
						}, styles)}>
						{fp.padCharsStart('0', 2, index + 1)}
					</li>
				), pagesCount)
			}
		</ul>
	</div>
)

WizardPagerComponent.propTypes = {
	stepSelection: PropTypes.bool,
	currentStep: PropTypes.number.isRequired,
	pagesCount: PropTypes.number.isRequired,
	onExternalSetStep: PropTypes.func.isRequired,
}

export default WizardPagerComponent
