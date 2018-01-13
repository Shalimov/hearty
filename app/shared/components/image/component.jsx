import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import styles from './styles'

const ImageComponent = ({ name, ext = 'png'}) => (
	<img src={`./img/${name}.${ext}`} className={css(styles.image)} />
)

ImageComponent.propTypes = {
	name: PropTypes.string.isRequired,
	ext: PropTypes.string,
}

export default ImageComponent
