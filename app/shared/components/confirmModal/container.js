import { compose, withState, withHandlers } from 'recompose'

import ConfirmModalComponent from './component'

export default compose(
	withState('isOpen', 'setModalState', false),
	withHandlers({
		onTrigger: ({ setModalState }) => () => {
			const isOpen = true
			setModalState(isOpen)
		},

		onInternalConfirm: ({ onConfirm, setModalState }) => (event) => {
			onConfirm(event)

			const isOpen = false
			setModalState(isOpen)
		},

		onRequestClose: ({ setModalState }) => () => {
			const isOpen = false
			setModalState(isOpen)
		},
	})
)(ConfirmModalComponent)
