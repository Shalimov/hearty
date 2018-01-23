import createRoutes from 'shared/hocs/create-routes'

import AddPatient from './add'
import EditPatient from './edit'
import OverviewPatients from './overview'

const PatientRoutes = createRoutes(({ match }) => [
	{
		path: `${match.path}/:patientId/edit`,
		component: EditPatient,
	},
	{
		path: `${match.path}/add`,
		component: AddPatient,
	},
	{
		path: match.path,
		component: OverviewPatients,
	},
])

export default PatientRoutes
