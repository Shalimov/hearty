import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'

import styles from './styles'

const EmptyAreaComponent = ({ children }) => (
	<div className={css(styles.container)}>
		<FontAwesome name="exclamation-circle"
			className={css(styles.icon)} />
		<div className={css(styles.messagebox)}>
			{children}
		</div>
	</div>
)

EmptyAreaComponent.propTypes = {
	children: PropTypes.node.isRequired,
}

export default EmptyAreaComponent
