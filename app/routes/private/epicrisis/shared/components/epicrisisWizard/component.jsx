import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Wizard } from 'shared/components'

import styles from './styles'
import initialData from './initial.data'

const EpicrisisWizardComponent = ({ items, onInternalSubmit, onCancel }) => (
	<div className={css(styles.epicrisisContainer)}>
		<Wizard
			startStep={0}
			items={items}
			initialValues={initialData}
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
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EpicrisisWizardComponent
