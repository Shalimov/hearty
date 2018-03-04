import createRoutes from 'shared/hocs/create-routes'

import AddEpicrisis from './add'
// import EditEpicrisis from './edit'
import OverviewEpicrisis from './overview'

const EpicrisisRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/add`,
		component: AddEpicrisis,
	},
	{
		path: match.path,
		component: OverviewEpicrisis,
	},
])

export default EpicrisisRoutes
