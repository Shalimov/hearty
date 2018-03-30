import { compose, lifecycle, withHandlers } from 'recompose'
import { showToast } from 'shared/toasts/confirm'
import systemSetup from 'system'

import AppicationComponent from './app.component'

export default compose(
	withHandlers({
		getUserConfirmation: () => async (message, callback) => {
			const allowTransition = await showToast(message)
			callback(allowTransition)
		},
	}),
	lifecycle({
		async componentWillMount() {
			this.setState({ isInitializing: true })

			const [
				applicationStateStore,
				apolloClient,
				services,
			] = await systemSetup.init()

			this.setState({
				isInitializing: false,
				apolloClient,
				applicationStateStore,
				services,
			})
		},
	})
)(AppicationComponent)
