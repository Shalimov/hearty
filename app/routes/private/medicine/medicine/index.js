import createRoutes from 'shared/hocs/create-routes'

import Overview from './overview'
import Edit from './edit'
import Add from './add'

const MedicineRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/:medicineId/edit`,
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

export default MedicineRoutes
