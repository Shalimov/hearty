import Ego from 'utils/validation'

export default {
	emailField: {
		scheme: Ego.string()
			.email()
			.label('Email')
			.required(),
	},
	passwordField: { 
		scheme: Ego.string()
			.label('Password')
			.required(),
	},
}

export const mapping = [
	['emailField', 'email'],
	['passwordField', 'password'],
]
