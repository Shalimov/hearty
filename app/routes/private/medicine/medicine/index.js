import createRoutes from 'shared/hocs/create-routes'

import Overview from './overview'

const MedicineRoutes = createRoutes(({ match }) => [
	{
		path: match.path,
		component: Overview,
	},
])

export default MedicineRoutes
