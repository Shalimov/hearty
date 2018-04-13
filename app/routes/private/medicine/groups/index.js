import createRoutes from 'shared/hocs/create-routes'

import Overview from './overview'

const MedicineGroupsRoutes = createRoutes(({ match }) => [
	{
		path: match.path,
		component: Overview,
	},
])

export default MedicineGroupsRoutes
