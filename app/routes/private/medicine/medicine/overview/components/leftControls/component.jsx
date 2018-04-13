import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { medicine } from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const LeftControlsComponent = ({ groupId, value }) => (
	<div className={css(styles.controls)}>
		<Link
			title={t('hints.clickToEdit')}
			className={css(styles.link)}
			to={medicine.editItem(groupId, value._id)}>
			<Button iconed>
				<FontAwesome name="pencil-square-o"
					className={css(styles.icon)} />
			</Button>
		</Link>
	</div>
)

LeftControlsComponent.propTypes = {
	groupId: PropTypes.string.isRequired,
	value: PropTypes.shape().isRequired,
}

export default LeftControlsComponent
