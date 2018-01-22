import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import styles from './styles'

const BGImageComponent = ({ name, ext = 'png', children }) => (
	<div className={css(styles.container)}
		style={{ backgroundImage: `url('./img/${name}.${ext}')` }}>
		{children}
	</div>
)

BGImageComponent.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	ext: PropTypes.string,
}

export default BGImageComponent
