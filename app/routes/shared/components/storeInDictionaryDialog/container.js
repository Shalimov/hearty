import { compose, withHandlers, withStateHandlers } from 'recompose'
import { connectDialogToHub } from 'shared/hocs'
import { tryAsync } from 'utils/try'
import { toast } from 'react-toastify'
import t from 'i18n'

import mutationsHoc from './hocs/mutations'
import StoreInDictionaryDialogComponent from './component'

export default compose(
	mutationsHoc,
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
	}),
	withHandlers({
		onSubmit: ({
			setOpenState,
			createTermMutation,
			createSubtermMutation,
		}) => tryAsync(async ({ _id, term, subterm }) => {
			let parentId = _id
			const hasNoId = !parentId

			if (hasNoId) {
				const { data: { createTerm } } = await createTermMutation({
					variables: { term },
				})

				parentId = createTerm._id
			}

			await createSubtermMutation({
				variables: { _id: parentId, term: subterm },
			})

			toast.info(t('toasts.dictionary.saved'))
			setOpenState(false)
		}),

		onRequestClose: ({ setOpenState }) => () => {
			setOpenState(false)
		},
	})
)(StoreInDictionaryDialogComponent)
