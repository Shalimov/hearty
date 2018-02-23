import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'

import DictionaryInputComponent from './component'

export default compose(
	withRouter,
	withHandlers({
		openFromDictionaryDialog: () => () => {
			alert('Dictionary')
		},

		onSelect: ({ field }) => (term) => {
			field.onChangeText(term)
		},
	})
)(DictionaryInputComponent)
