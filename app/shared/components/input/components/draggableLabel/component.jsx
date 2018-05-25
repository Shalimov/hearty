import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import styles from './styles'


const DraggableLabelComponent = ({
	className,
	text,
	connectDragSource,
}) => connectDragSource(
	<div className={css(styles.container)}>
		<label className={className}>{text}</label>
	</div>
)

DraggableLabelComponent.propTypes = {
	connectDragSource: PropTypes.func.isRequired,
	text: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
}

export default DraggableLabelComponent
