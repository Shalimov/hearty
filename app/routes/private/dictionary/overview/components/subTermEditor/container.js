import { compose, mapProps } from 'recompose'

import SubTermEditorComponent from './component'

export default compose(
	mapProps((row) => ({
		subTerms: row.original.subTerms,
	}))
)(SubTermEditorComponent)
