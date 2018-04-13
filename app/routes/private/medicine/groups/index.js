import createRoutes from 'shared/hocs/create-routes'

import Add from './add'
import Edit from './edit'
import Overview from './overview'

const MedicineGroupsRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/:groupId/edit`,
		component: Edit,
	},
	{
		path: `${match.path}/add`,
		component: Add,
	},
	{
		path: match.path,
		component: Overview,
	},
])

export default MedicineGroupsRoutes
