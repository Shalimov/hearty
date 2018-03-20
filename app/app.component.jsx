import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ContentLoader } from 'shared/components'
import { DialogProvider } from 'shared/hocs'

import ApplicationRoutes from './routes'

const ApplicationComponent = ({
	services,
	apolloClient,
	isInitializing,
	applicationStateStore,
}) => (
	<ContentLoader isLoading={isInitializing} fixed>
		<ToastContainer />
		{!isInitializing && <ApolloProvider client={apolloClient}>
			<DialogProvider>
				<Provider
					applicationStateStore={applicationStateStore}
					{...services}>
					<Router>
						<ApplicationRoutes />
					</Router>
				</Provider>
			</DialogProvider>
		</ApolloProvider>}
	</ContentLoader>
)

ApplicationComponent.propTypes = {
	isInitializing: PropTypes.bool.isRequired,
	apolloClient: PropTypes.shape(),
	services: PropTypes.shape(),
	applicationStateStore: PropTypes.shape(),
}

export default ApplicationComponent
