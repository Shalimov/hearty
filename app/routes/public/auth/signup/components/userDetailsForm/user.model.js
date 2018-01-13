import fp from 'lodash/fp'
import Ego from 'utils/validation'

export default ({ initialValues = {} }) => ({
	personalFirstName: {
		initialValue: initialValues.personalFirstName,
		scheme: Ego.string(),
	},
	personalLastName: {
		initialValue: initialValues.personalLastName,
		scheme: Ego.string(),
	},
	personalEmail: {
		initialValue: initialValues.personalEmail,
		scheme: Ego.string()
			.email()
			.label('Email')
			.required(),
	},
	personalPhoneNumber: {
		initialValue: initialValues.personalPhoneNumber,
		scheme: Ego.string()
			.phoneNumber()
			.label('Phone number')
			.required(),
	},

	username: {
		initialValue: initialValues.username,
		scheme: Ego.string()
			.username()
			.label('Username')
			.required(),
	},
	password: Ego.string()
		.min(8)
		.simplePassword()
		.label('Password')
		.required(),
	confirmPassword: Ego.ref()
		.match(fp.get('fields.password.value'))
		.messages({
			[Ego.ERROR_KEYS.REF.MATCH]: fp.constant('Password doesn\'t match'),
		})
		.label('Repeat password')
		.required(),
})
