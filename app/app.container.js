import { lifecycle } from 'recompose'
import systemSetup from 'system'

import AppicationComponent from './app.component'

export default lifecycle({
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
})(AppicationComponent)
