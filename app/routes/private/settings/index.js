import createRoutes from 'shared/hocs/create-routes'

import Shortcuts from './shortcuts'

const SettingsRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/shortcuts`,
		component: Shortcuts,
	},
])

export default SettingsRoutes
