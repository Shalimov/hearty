import createRoutes from 'shared/hocs/create-routes'

import Medicine from './medicine'
import Groups from './groups'

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
