import createRoutes from 'shared/hocs/create-routes'
import { renderIfAuthenticated } from 'shared/hocs/authenticated'

import Layout from './layout'
import Welcome from './welcome'
import Analysis from './analysis'
import Dictionary from './dictionary'
import Medicine from './medicine'
import Epicrisis from './epicrisis'

const PrivateRoutesRoot = createRoutes(({ match }) => [
	{
		path: `${match.path}/analysis`,
		component: Analysis,
	},
	{
		path: `${match.path}/medicine`,
		component: Medicine,
	},
	{
		path: `${match.path}/dictionary`,
		component: Dictionary,
	},
	{
		path: `${match.path}/epicrisis`,
		component: Epicrisis,
	},
	{
		path: match.path,
		component: Welcome,
	},
], { layout: renderIfAuthenticated(Layout) })

export default PrivateRoutesRoot
