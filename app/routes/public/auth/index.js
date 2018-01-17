import createRoutes from 'shared/hocs/create-routes'

import SignIn from './signin'

const AuthRoutes = createRoutes(({ match }) => [
	{
		redirect: {
			exact: true,
			from: match.path,
			to: `${match.path}/signin`,
		},
	},
	{
		path: `${match.path}/signin`,
		component: SignIn,
	},
])

export default AuthRoutes
