import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import DictionaryInputComponent from './component'

export default compose(
	withRouter,
	inject('applicationStateStore'),
	withHandlers({
		openFromDictionaryDialog: ({ applicationStateStore, field }) => async () => {
			const uiState = applicationStateStore.uiState
			const dialogData = await uiState.setDictionaryDialogStateOpen()
			field.onChangeText(dialogData)
		},
	})
)(DictionaryInputComponent)
