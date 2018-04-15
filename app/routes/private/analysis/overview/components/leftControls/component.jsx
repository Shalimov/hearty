import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { analysis } from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const LeftControlsComponent = ({ value }) => (
	<Link
		title={t('hints.clickToEdit')}
		className={css(styles.link)}
		to={analysis.edit(value._id)}>
		<Button iconed>
			<FontAwesome name="pencil-square-o"
				className={css(styles.icon)} />
		</Button>
	</Link>
)

LeftControlsComponent.propTypes = {
	value: PropTypes.shape().isRequired,
}

export default LeftControlsComponent
