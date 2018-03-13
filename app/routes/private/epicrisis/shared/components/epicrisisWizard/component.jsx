import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Wizard } from 'shared/components'

import styles from './styles'

const EpicrisisWizardComponent = ({
	items,
	initialValues = {},
	onContainerRef,
	onInternalSubmit,
	onStepChanged,
	onCancel,
}) => (
	<div ref={onContainerRef} className={css(styles.epicrisisContainer)}>
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
	onInternalSubmit: PropTypes.func.isRequired,
	onStepChanged: PropTypes.func.isRequired,
	onContainerRef: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EpicrisisWizardComponent
