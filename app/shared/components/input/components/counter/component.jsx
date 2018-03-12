import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'

import styles from './styles'

const CounterComponent = ({ counterValue, onUp, onDown }) => (
	<div className={css(styles.counterContainer)}>
		<button className={css(styles.counterButton)}
			type="button"
			onClick={onUp}>
			<FontAwesome name="plus" />
		</button>
		<div className={css(styles.counterValue)}>
			{counterValue}
		</div>
		<button className={css(styles.counterButton)}
			type="button"
			onClick={onDown}>
			<FontAwesome name="minus" />
		</button>
	</div>
)

CounterComponent.propTypes = {
	counterValue: PropTypes.number.isRequired,
	onUp: PropTypes.func.isRequired,
	onDown: PropTypes.func.isRequired,
}

export default CounterComponent
