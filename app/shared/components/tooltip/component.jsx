import React from 'react'
import PropTypes from 'prop-types'
import { cssx } from 'utils/aphrodite-ext'
import styles from './styles'

const TooltipComponent = ({
	left,
	right,
	top,
	bottom,
	children,
}) => (
	<div className={cssx({ 
		tooltip: true,
		arrowBox: true,
		left,
		right,
		top,
		bottom,
	}, styles)}>
		{children}
	</div>
)

TooltipComponent.propTypes = {
	left: PropTypes.bool,
	right: PropTypes.bool,
	top: PropTypes.bool,
	bottom: PropTypes.bool,
	children: PropTypes.node.isRequired,
}

export default TooltipComponent