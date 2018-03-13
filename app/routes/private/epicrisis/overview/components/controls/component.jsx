import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { epicrisis } from 'routes/route.map'
import { ConfirmModal } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const ControlsComponent = ({ value, onInternalPrint, onInternalRemove }) => (
	<div className={css(styles.controls)}>
		<Link
			title={t('hints.clickToEdit')}
			className={css(styles.link)}
			to={epicrisis.edit(value._id)}>
			<Button iconed>
				<FontAwesome name="pencil-square-o"
					className={css(styles.icon)} />
			</Button>
		</Link>
		<Button
			disabled={!fp.has('patient.departureAt', value)}
			title={t('hints.clickToPrint')}
			iconed 
			onClick={onInternalPrint}>
			<FontAwesome name="print"
				className={css(styles.link, styles.icon)} />
		</Button>
		<ConfirmModal onConfirm={onInternalRemove}>
			{
				onTrigger => (
					<Button
						title={t('hints.clickToRemove')}
						iconed 
						onClick={onTrigger}>
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
	onInternalPrint: PropTypes.func.isRequired,
	onInternalRemove: PropTypes.func.isRequired,
}

export default ControlsComponent
