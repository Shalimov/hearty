import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { withFormModel } from 'shared/hocs'

import DictionaryDialogComponent from './component'
import searchModel from './search.model'

export default compose(
	inject('applicationStateStore'),
	withFormModel(searchModel, { spreadFields: true }),
	withHandlers({
		onRequestClose: ({ applicationStateStore }) => () => {
			applicationStateStore.uiState.setDictionaryDialogStateClose()
		},
	})
)(DictionaryDialogComponent)
