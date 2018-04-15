import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { ConfirmModal } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const RightControlsComponent = ({ onInternalRemove }) => (
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
)

RightControlsComponent.propTypes = {
	onInternalRemove: PropTypes.func.isRequired,
}

export default RightControlsComponent
