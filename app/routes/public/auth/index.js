import createRoutes from 'shared/hocs/create-routes'

import SignIn from './signin'
import SignUp from './signup'
import ForgotPassword from './forgotPassword'
import ChangePassword from './changePassword'

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
	{
		path: `${match.path}/signup`,
		component: SignUp,
	},
	{
		path: `${match.path}/change-password`,
		component: ChangePassword,
	},
	{
		path: `${match.path}/forgot-password`,
		component: ForgotPassword,
	},
])

export default AuthRoutes
