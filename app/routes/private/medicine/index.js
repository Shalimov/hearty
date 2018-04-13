import createRoutes from 'shared/hocs/create-routes'

import Groups from './groups'

const MedicineRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/groups`,
		component: Groups,
	},
])

export default MedicineRoutes
