import { renderIfNotAuthenticated } from 'shared/hocs/authenticated'
import AuthRoutes from './auth'

const PublicRoutes = [
	{
		redirect: {
			exact: true,
			from: '/',
			to: '/auth',
		},
	},
	{
		path: '/auth',
		component: renderIfNotAuthenticated(AuthRoutes),
	},
]

export default PublicRoutes
