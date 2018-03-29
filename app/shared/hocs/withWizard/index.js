import fp from 'lodash/fp'
import { compose, withContext, getContext, lifecycle, mapProps } from 'recompose'
import PropTypes from 'prop-types'

const wrapHook = hook => () => new Promise((resolve, reject) => {
	hook((err, result) => {
		if (err) {
			reject(err)
		} else {
			resolve(result)
		}
	})
})

const defaultHooks = {
	wizardHooks: {
		onRequestData: fp.noop,
		onBeforeNext: fp.noop,
		// onBeforePrev: fp.noop,
	},
}

const contextType = {
	wizardHooks: PropTypes.shape({
		onRequestData: PropTypes.func.isRequired,
		onBeforeNext: PropTypes.func.isRequired,
		// onBeforePrev: PropTypes.func.isRequired,
	}).isRequired,
}
// Wizard what we need
// onRequestData
// onBeforeNext
// onBeforePrev

const updateHooks = (hooks, props) => {
	const { wizardHooks } = props
	wizardHooks.onRequestData = wrapHook(hooks.onRequestData(props))
	wizardHooks.onBeforeNext = wrapHook(hooks.onBeforeNext(props))
}

const connectWizard = compose(
	withContext(contextType, () => ({ ...defaultHooks })),
	getContext(contextType)
)

const withWizardHooks = hooks => compose(
	getContext(contextType),
	lifecycle({
		componentDidMount() {
			updateHooks(hooks, this.props)
		},

		componentDidUpdate() {
			updateHooks(hooks, this.props)
		},

		componentWillUnmount() {
			const { wizardHooks } = this.props
			Object.assign(wizardHooks, defaultHooks)
		},
	}),
	mapProps(fp.omit('wizardHooks')),
)


export {
	connectWizard,
	withWizardHooks,
}
