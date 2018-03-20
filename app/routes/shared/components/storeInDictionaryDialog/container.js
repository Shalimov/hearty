import { compose, withHandlers, withStateHandlers } from 'recompose'
import { connectDialogToHub } from 'shared/hocs'

import StoreInDictionaryDialogComponent from './component'

export default compose(
	withStateHandlers({
		isOpen: false,
		dialogData: undefined,
	}, {
		setOpenState: () => isOpen => ({ isOpen }),
		setState: () => state => state,
	}),
	connectDialogToHub({
		dialogId: 'storeInDictionaryDialog',
		open: ({ setState }) => (subterm) => {
			setState({
				isOpen: true,
				dialogData: {
					subterm,
				},
			})
		},

		close: ({ setOpenState }) => () => {
			setOpenState(false)
		},

		getData: () => () => {

		},
	}),
	withHandlers({
		onSubmit: ({ setOpenState }) => () => {
			setOpenState(false)
		},

		onRequestClose: ({ setOpenState }) => () => {
			setOpenState(false)
		},
	})
)(StoreInDictionaryDialogComponent)
