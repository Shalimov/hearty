import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Wizard, Image } from 'shared/components'

import styles from './styles'

const SignUpComponent = ({
	confirmDialogInitialValues,
	isConfirmationModalOpen,
	currentStep,
	wizardItems,
	onSubmit,
	onCancel,
	onConfirmSuccess,
	onConfirmError,
	onStepChanged,
}) => (
	<div className={css(styles.container)}>
		<div className={css(styles.imageContainer)}>
			<Image name="hearty-bg" ext="jpg" />
		</div>
		<div className={css(styles.signupContainer)}>
			<h2 className={css(styles.pageHeader)}>
					Register
				<span className={css(styles.headerDelimiter)}>|</span>
				<span className={css(styles.stepIndicator)}>Step {currentStep + 1} of 2</span>
			</h2>
			<Wizard startStep={currentStep}
				items={wizardItems}
				onSubmit={onSubmit}
				onCancel={onCancel}
				onStepChanged={onStepChanged} />
		</div>
	</div>
)

SignUpComponent.propTypes = {
	confirmDialogInitialValues: PropTypes.shape({ username: PropTypes.string }),
	isConfirmationModalOpen: PropTypes.bool.isRequired,
	currentStep: PropTypes.number.isRequired,
	wizardItems: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.shape()])),
		])
	).isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onConfirmSuccess: PropTypes.func.isRequired,
	onConfirmError: PropTypes.func.isRequired,
	onStepChanged: PropTypes.func.isRequired,
}

export default observer(SignUpComponent)
