import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'

import styles from './styles'

const EmptyAreaComponent = ({ children, icon }) => (
	<div className={css(styles.container)}>
		{icon && <FontAwesome name={icon} className={css(styles.icon)} />}
		<div className={css(styles.messagebox)}>
			{children}
		</div>
	</div>
)

EmptyAreaComponent.propTypes = {
	icon: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default EmptyAreaComponent
