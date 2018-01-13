import createRoutes from 'shared/hocs/create-routes'

import NotFound from './shared/pages/notFound'
import PublicRoutes from './public'
import PrivateRoutes from './private'

export default createRoutes(() => [
	...PublicRoutes,
	{
		path: '/board',
		component: PrivateRoutes,
	},
	{
		component: NotFound,
	},
])
