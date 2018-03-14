import { compose, withHandlers, withState } from 'recompose'

import TemplateFinderModalComponent from './component'

export default compose(
	withState('isOpen', 'setOpenState', false),
	withHandlers({
		onTrigger: ({ setOpenState }) => () => {
			setOpenState(true)
		},

		onInternalSubmit: ({ onSubmit, setOpenState }) => (data) => {
			setOpenState(false)
			onSubmit(data)
		},

		onRequestClose: ({ setOpenState }) => () => {
			setOpenState(false)
		},
	})
)(TemplateFinderModalComponent)
