import React from 'react'
import PropTypes from 'prop-types'
import { cssx, join } from 'utils/aphrodite-ext'
import styles from './styles'

const ButtonComponent = ({
	tiny,
	small,
	large,
	long,
	fullbox,
	rounded,
	wrapper,
	iconed,
	white,
	outlined,
	transparent,
	className,
	children,
	medium = true,
	type = 'button',
	...props
}) => (
	<button
		{...props}
		type={type}
		className={
			join(
				cssx(new Map([
					['btn', true],
					['medium', medium],
					['tiny', tiny],
					['small', small],
					['large', large],
					['fullbox', fullbox],
					['wrapper', wrapper],
					['long', long],
					['iconed', iconed],
					['white', white],
					['rounded', rounded],
					['outlined', outlined],
					['transparent', transparent],
				]), styles),
				className,
			)
		}>
		{children}
	</button>
)

ButtonComponent.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	rounded: PropTypes.bool,
	fullbox: PropTypes.bool,
	long: PropTypes.bool,
	iconed: PropTypes.bool,
	wrapper: PropTypes.bool,
	outlined: PropTypes.bool,
	transparent: PropTypes.bool,
	white: PropTypes.bool,
	tiny: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	children: PropTypes.node,
}

export default ButtonComponent
