import { compose, withHandlers, withState, defaultProps } from 'recompose'

import CounterComponent from './component'

const clamp = (value, min = Number.MIN_VALUE, max = Number.MAX_VALUE) => Math.min(max, Math.max(min, value)) 

export default compose(
	defaultProps({
		value: 0,
		step: 1,
	}),
	withState('counterValue', 'setCounterValue', ({ value }) => value),
	withHandlers({
		onInternalChange: ({ setCounterValue, onChange, onBlur, counterValue }) => (value) => {
			const isChanged = counterValue !== value
			setCounterValue(value) 

			if (onChange && isChanged) {
				onChange({ target: { value } })
			}

			if (onBlur && isChanged) {
				onBlur()
			}
		},
	}),
	withHandlers({
		onUp: ({ step, counterValue, onInternalChange, min, max }) => () => {
			const value = clamp(counterValue + step, min, max)
			onInternalChange(value)
		},

		onDown: ({ step, counterValue, onInternalChange, min, max }) => () => {
			const value = clamp(counterValue - step, min, max)
			onInternalChange(value)
		},
	})
)(CounterComponent)
