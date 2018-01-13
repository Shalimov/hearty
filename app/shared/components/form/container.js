import { withHandlers } from 'recompose'

import FormComponent from './components'

export default withHandlers({
	onInternalSubmit: ({ onSubmit }) => {
		return onSubmit ? onSubmit : (event) => {
			event.preventDefault()
		}
	},
})(FormComponent)
