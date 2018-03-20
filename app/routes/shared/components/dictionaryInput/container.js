import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withDialog } from 'shared/hocs'

import DictionaryInputComponent from './component'

export default compose(
	withRouter,
	withDialog('pasteFromDictionaryDialog', { as: 'pasteFromDictionaryDialog' }),
	withDialog('storeInDictionaryDialog', { as: 'storeInDictionaryDialog' }),
	withHandlers({
		openPasteFromDictionaryDialog: ({ pasteFromDictionaryDialog, field }) => async () => {
			pasteFromDictionaryDialog.open()

			// TODO: this is workaround to transmit data between dialog and input and should be improved
			pasteFromDictionaryDialog.onceData((term) => {
				field.onChangeText(term)
			})
		},

		openStoreInDictionaryDialog: ({ storeInDictionaryDialog, field }) => async () => {
			storeInDictionaryDialog.open(field.value)
		},
	})
)(DictionaryInputComponent)
