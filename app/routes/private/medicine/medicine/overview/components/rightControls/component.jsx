import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { ConfirmModal } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const RightControlsComponent = ({ onInternalRemove }) => (
	<div className={css(styles.controls)}>
		<ConfirmModal onConfirm={onInternalRemove}>
			{
				onTrigger => (
					<Button
						title={t('hints.clickToRemove')}
						iconed onClick={onTrigger}>
						<FontAwesome name="trash"
							className={css(styles.link, styles.icon)} />
					</Button>
				)
			}
		</ConfirmModal>
	</div>
)

RightControlsComponent.propTypes = {
	value: PropTypes.shape().isRequired,
	onInternalRemove: PropTypes.func.isRequired,
}

export default RightControlsComponent
