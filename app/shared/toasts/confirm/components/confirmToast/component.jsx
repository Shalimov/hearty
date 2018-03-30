import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const ConfirmToastComponent = ({ message, onOk, onCancel }) => (
	<div className={css(styles.messageBox)}>
		<p>{message}</p>
		<div className={css(styles.buttonGroup)}>
			<div className={css(styles.buttonWrapper)}>
				<Button tiny white onClick={onOk}>
					{t('buttons.ok')}
				</Button>
			</div>
			<div className={css(styles.buttonWrapper)}>
				<Button tiny white onClick={onCancel}>
					{t('buttons.no')}
				</Button>
			</div>
		</div>
	</div>
)

ConfirmToastComponent.propTypes = {
	message: PropTypes.string.isRequired,
	onOk: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default ConfirmToastComponent
