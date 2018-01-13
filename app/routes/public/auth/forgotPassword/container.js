import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { toast } from 'react-toastify'
import { auth } from 'routes/route.map'

import ForgotPasswordComponent from './component'

export default compose(
	inject('authService'),
	withHandlers({
		onSubmit: ({ authService, history }) => async ({ usernameField }) => {
			try {
				await authService.resetPassword(usernameField)

				history.push(auth.changePassword())
			} catch (err) {
				toast.error(err.message)
				throw err
			}
		},
	})
)(ForgotPasswordComponent)
