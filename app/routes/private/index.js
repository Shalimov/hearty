import createRoutes from 'shared/hocs/create-routes'
import { renderIfAuthenticated } from 'shared/hocs/authenticated'

import Layout from './layout'
import Welcome from './welcome'
import Patients from './patients'

const PrivateRoutesRoot = createRoutes(({ match }) => [
	{
		path: `${match.path}/patients`,
		component: Patients,
	},
	{
		path: match.path,
		component: Welcome,
	},
], { layout: renderIfAuthenticated(Layout) })

export default PrivateRoutesRoot
