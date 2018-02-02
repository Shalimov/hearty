import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import t from 'i18n'

import styles, { dialogStyles } from './styles'

const ConfirmModalComponent = ({
	isOpen,
	confirmQuestionText = t('common.runQuestion'),
	confirmText = t('buttons.ok'),
	cancelText = t('buttons.no'),
	onTrigger,
	onConfirm,
	onRequestClose,
	children,
}) => (
	<div>
		<Modal isOpen={isOpen} onRequestClose={onRequestClose} style={dialogStyles}>
			<h2 className={css(styles.confirmQuestionHeader)}>{confirmQuestionText}</h2>
			<div className={css(styles.confirmButtonGroup)}>
				<div className={css(styles.confirmButtonWrapper)}>
					<Button small outlined rounded onClick={onRequestClose}>{cancelText}</Button>
				</div>
				<Button small rounded onClick={onConfirm}>{confirmText}</Button>
			</div>
		</Modal>
		{children(onTrigger)}
	</div>
)

ConfirmModalComponent.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	confirmQuestionText: PropTypes.string,
	confirmText: PropTypes.string,
	cancelText: PropTypes.string,
	onTrigger: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
}

export default ConfirmModalComponent
