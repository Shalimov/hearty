import Ego from 'utils/validation'

export default {
	usernameField: Ego.string()
		.username()
		.label('Username')
		.required(),
	codeField: Ego.string()
		.digitLine()
		.label('Code')
		.required(),
	newPasswordField: Ego.string()
		.simplePassword()
		.label('New password')
		.required(),
}
