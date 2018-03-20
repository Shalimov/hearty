import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { withDialog } from 'shared/hocs'

import DictionaryInputComponent from './component'

export default compose(
	withRouter,
	inject('applicationStateStore'),
	withDialog('storeInDictionaryDialog', { as: 'storeInDictionaryDialog' }),
	withHandlers({
		openFromDictionaryDialog: ({ applicationStateStore, field }) => async () => {
			const uiState = applicationStateStore.uiState
			const dialogData = await uiState.setDictionaryDialogStateOpen()
			field.onChangeText(dialogData)
		},

		openStoreInDictionaryDialog: ({ storeInDictionaryDialog, field }) => async () => {
			storeInDictionaryDialog.open(field.value)
		},
	})
)(DictionaryInputComponent)
