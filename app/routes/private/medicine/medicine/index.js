import createRoutes from 'shared/hocs/create-routes'

import Overview from './overview'
import Add from './add'

const MedicineRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/add`,
		component: Add,
	},
	{
		path: match.path,
		component: Overview,
	},
])

export default MedicineRoutes
