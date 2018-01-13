import Ego from 'utils/validation'

export default {
	emailField: Ego.string()
		.email()
		.label('Email')
		.required(),
}
