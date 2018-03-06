import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import ctModel, { mapping } from './ct.model'
import CTInfoComponent from './component'

export default compose(
	withFormModel(ctModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(CTInfoComponent)
