import React from 'react'
import PropTypes from 'prop-types'
import { cssx } from 'utils/aphrodite-ext'

import styles from './styles'

const cx = cssx.bindWith(styles)

const ImageComponent = ({ name, ext = 'png', small }) => (
	<img src={`./img/${name}.${ext}`} className={cx({
		image: true,
		small,
	})} />
)

ImageComponent.propTypes = {
	name: PropTypes.string.isRequired,
	small: PropTypes.bool,
	ext: PropTypes.string,
}

export default ImageComponent
