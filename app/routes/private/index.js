import createRoutes from 'shared/hocs/create-routes'
import { renderIfAuthenticated } from 'shared/hocs/authenticated'

import Layout from './layout'
import Welcome from './welcome'

const PrivateRoutesRoot = createRoutes(({ match }) => [
	{
		exact: true,
		path: match.path,
		component: Welcome,
	},
], { layout: renderIfAuthenticated(Layout) })

export default PrivateRoutesRoot
