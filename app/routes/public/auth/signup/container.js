import { compose, withHandlers, withStateHandlers, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { toast } from 'react-toastify'
import { auth } from 'routes/route.map'
import mapper from 'utils/simple.mapper'

import SignUpComponent from './component'
import UserDetailsForm from './components/userDetailsForm'
import signUpMapping from './signup.mapping'

export default compose(
	inject('authService'),
	withStateHandlers({
		currentStep: 0,
		confirmDialogInitialValues: {},
		isConfirmationModalOpen: false,
	}, {
		setStep: () => (step) => ({ currentStep: step }),
		openModal: () => (initialValues) => ({ 
			isConfirmationModalOpen: true,
			confirmDialogInitialValues: initialValues,
		}),
		closeModal: () => () => ({ isConfirmationModalOpen: false }),
	}),
	withRouter,
	withProps({
		wizardItems: [
			UserDetailsForm,
		],
	}),
	withHandlers({
		onSubmit: ({ authService, history, openModal }) => async (wizardData) => {
			try {
				const userWithTenantData = mapper(wizardData, signUpMapping)
				const { signedUp } = await authService.signup(userWithTenantData)

				if (signedUp) {
					history.push(auth.signin())
					return
				}

				openModal({ username: wizardData.username })
			} catch (err) {
				toast.error(err.message)
				throw err
			}
		},
		
		onCancel: ({ history }) => () => {
			history.push(auth.signin())
		},

		onConfirmSuccess: ({ history, closeModal }) => () => {
			closeModal()
			history.push(auth.signin())
		},

		onConfirmError: () => (error) => {
			toast.error(error.message)
		},

		onStepChanged: ({ setStep }) => (stepNumber) => {
			setStep(stepNumber)
		},
	})
)(SignUpComponent)
