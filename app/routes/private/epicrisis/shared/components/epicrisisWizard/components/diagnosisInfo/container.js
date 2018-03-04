import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import diagnosisModel, { mapping } from './diagnosis.model'
import DiagnosisInfoComponent from './component'

export default compose(
	withFormModel(diagnosisModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(DiagnosisInfoComponent)
