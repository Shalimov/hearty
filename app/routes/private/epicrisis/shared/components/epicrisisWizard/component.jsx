import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'
import { Wizard } from 'shared/components'

import styles from './styles'

const EpicrisisWizardComponent = ({
	items,
	initialValues = {},
	currentStep,
	onContainerRef,
	onInternalSubmit,
	onStepChanged,
	onCancel,
}) => (
	<div ref={onContainerRef} className={css(styles.epicrisisContainer)}>
		<div className={css(styles.pager)}>
			<ul className={css(styles.pageIndicatorList)}>
				{
					fp.times(index => (
						<li
							key={`page-${index}`}
							className={cssx({
								pageIndicator: true,
								current: currentStep === index,
							}, styles)}>
							{fp.padCharsStart('0', 2, index + 1)}
						</li>
					), items.length)
				}
			</ul>
		</div>
		<Wizard
			startStep={0}
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
	currentStep: PropTypes.number.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onStepChanged: PropTypes.func.isRequired,
	onContainerRef: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EpicrisisWizardComponent
