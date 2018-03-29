import fp from 'lodash/fp'
import { compose, lifecycle, withHandlers, withState, mapProps } from 'recompose'
import SubmitButtonComponent from './component'

const componentAliveSet = new WeakSet()

export default compose(
	withState('isSubmitting', 'setSubmitState', false),
	withHandlers({
		onInternalSubmit: ({ form, onSubmit, setSubmitState }) => () => {
			if (form.isInvalid) {
				form.setTouched(true)
				return undefined
			}

			if (!onSubmit) {
				return undefined
			}

			const result = onSubmit(form.value, form)

			if (result && fp.isFunction(result.then)) {
				setSubmitState(true)

				const submitTracking = () => {
					if (componentAliveSet.has(form)) {
						setSubmitState(false)
					}
				}

				result.then(submitTracking, submitTracking)
			}
		},
	}),
	lifecycle({
		componentDidMount() {
			const { form } = this.props
			componentAliveSet.add(form)
		},

		componentWillUnmount() {
			const { form } = this.props
			componentAliveSet.delete(form)
		},
	}),
	mapProps(props => fp.omit(['setSubmitState'], props)),
)(SubmitButtonComponent)
