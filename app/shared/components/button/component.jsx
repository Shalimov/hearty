import React from 'react'
import PropTypes from 'prop-types'
import { cssx } from 'utils/aphrodite-ext'
import styles from './styles'

const ButtonComponent = ({
	tiny,
	small,
	large,
	long,
	rounded,
	wrapper,
	iconed,
	white,
	outlined,
	transparent,
	children,
	medium = true,
	type = 'button',
	...props
}) => (
	<button
		{...props}
		type={type}
		className={cssx(new Map([
			['btn', true],
			['medium', medium],
			['tiny', tiny],
			['small', small],
			['large', large],
			['wrapper', wrapper],
			['long', long],
			['iconed', iconed],
			['white', white],
			['rounded', rounded],
			['outlined', outlined],
			['transparent', transparent],
		]), styles)}
	>
		{children}
	</button>
)

ButtonComponent.propTypes = {
	type: PropTypes.string,
	rounded: PropTypes.bool,
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
