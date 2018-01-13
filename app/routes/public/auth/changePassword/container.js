import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { toast } from 'react-toastify'
import { auth } from 'routes/route.map'

import ChangePasswordComponent from './component'

export default compose(
	inject('authService'),
	withHandlers({
		onSubmit: ({ authService, history }) =>
			async ({ usernameField, codeField, newPasswordField }) => {
				try {
					await authService.resetPasswordConfirm(usernameField, codeField, newPasswordField)

					history.push(auth.signin())
				} catch (err) {
					toast.error(err.message)
					throw err
				}
			},
	})
)(ChangePasswordComponent)
