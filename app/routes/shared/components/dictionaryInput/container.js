import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import DictionaryInputComponent from './component'

export default compose(
	withRouter,
	inject('applicationStateStore'),
	withHandlers({
		openFromDictionaryDialog: ({ applicationStateStore }) => () => {
			const uiState = applicationStateStore.uiState
			uiState.setDictionaryDialogStateOpen()
		},

		onSelect: ({ field }) => (term) => {
			field.onChangeText(term)
		},
	})
)(DictionaryInputComponent)
