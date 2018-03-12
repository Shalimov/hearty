import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import analysisModel, { mapping } from './analysis.model'
import EditAnalysisFormComponent from './component'

export default compose(
	withFormModel(analysisModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ onSubmit }) => fp.flow(
			formdata => mapper(formdata, mapping),
			onSubmit
		),
	})
)(EditAnalysisFormComponent)
