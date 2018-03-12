import createRoutes from 'shared/hocs/create-routes'

import AddAnalysis from './add'
import EditAnalysis from './edit'
import OverviewAnalyses from './overview'

const AnalysisRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/add`,
		component: AddAnalysis,
	},
	{
		path: `${match.path}/:analysisId/edit`,
		component: EditAnalysis,
	},
	{
		path: match.path,
		component: OverviewAnalyses,
	},
])

export default AnalysisRoutes
