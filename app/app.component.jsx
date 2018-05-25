import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import { MemoryRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ContentLoader } from 'shared/components'
import { DialogProvider } from 'shared/hocs'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

import ApplicationRoutes from './routes'

const ApplicationComponent = ({
	services,
	apolloClient,
	isInitializing,
	getUserConfirmation,
	applicationStateStore,
}) => (
	<ContentLoader isLoading={isInitializing} fixed>
		<ToastContainer />
		{!isInitializing && <ApolloProvider client={apolloClient}>
			<DialogProvider>
				<Provider
					applicationStateStore={applicationStateStore}
					{...services}>
					<DragDropContextProvider backend={HTML5Backend}>
						<Router getUserConfirmation={getUserConfirmation}>
							<ApplicationRoutes />
						</Router>
					</DragDropContextProvider>
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
	getUserConfirmation: PropTypes.func.isRequired,
}

export default ApplicationComponent
