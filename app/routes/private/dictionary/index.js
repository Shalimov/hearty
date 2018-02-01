import createRoutes, { KeyIsModalRoute } from 'shared/hocs/create-routes'

import AddPatient from './add'
import OverviewDictionary from './overview'

const DictionaryRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/add`,
		component: AddPatient,
		[KeyIsModalRoute]: true,
	},
	{
		path: match.path,
		component: OverviewDictionary,
	},
])

export default DictionaryRoutes
