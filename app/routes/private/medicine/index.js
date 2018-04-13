import createRoutes from 'shared/hocs/create-routes'

import Groups from './groups'
import Medicine from './medicine'

const MedicineRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/groups/:groupId/list`,
		component: Medicine,
	},
	{
		path: `${match.path}/groups`,
		component: Groups,
	},
])

export default MedicineRoutes
