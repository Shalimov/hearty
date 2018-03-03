import { compose, withState, withHandlers } from 'recompose'
import { inject } from 'mobx-react'

import CompiledTerm from './compiled.term'
import DictionaryTemplateEditorComponent from './component'

export default compose(
	inject('applicationStateStore'),
	withState('term', 'compileTerm', null),
	withHandlers({
		onSelectTerm: ({ applicationStateStore, compileTerm }) => async () => {
			const result = await applicationStateStore.uiState.setDictionaryDialogStateOpen()

			if (result) {
				compileTerm(CompiledTerm.compileTerm(result))
			}
		},
	})
)(DictionaryTemplateEditorComponent)
