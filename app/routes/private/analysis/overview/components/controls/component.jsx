import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { analysis } from 'routes/route.map'
import { ConfirmModal } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const ControlsComponent = ({ value, onInternalRemove }) => (
	<div className={css(styles.controls)}>
		<Link
			title={t('hints.clickToEdit')}
			className={css(styles.link)}
			to={analysis.edit(value._id)}>
			<Button iconed>
				<FontAwesome name="pencil-square-o"
					className={css(styles.icon)} />
			</Button>
		</Link>
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

ControlsComponent.propTypes = {
	value: PropTypes.shape().isRequired,
	onInternalRemove: PropTypes.func.isRequired,
}

export default ControlsComponent
