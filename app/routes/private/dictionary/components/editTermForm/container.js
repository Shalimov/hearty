import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import EditTermModel, { mapping } from './edit.term.model'
import EditTermFormComponent from './component'

export default compose(
	withFormModel(EditTermModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ onSubmit, formModel }) => () => {
			const covertedModel = mapper(formModel.value, mapping)

			onSubmit(covertedModel)
		},
	})
)(EditTermFormComponent)
