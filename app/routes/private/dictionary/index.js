import createRoutes from 'shared/hocs/create-routes'
import OverviewDictionary from './overview'

const DictionaryRoutes = createRoutes(({ match }) => [
	{
		path: match.path,
		component: OverviewDictionary,
	},
])

export default DictionaryRoutes
