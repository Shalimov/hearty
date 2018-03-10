import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import recommendedModel, { mapping } from './recommended.model'
import RecommendedInfoComponent from './component'

export default compose(

	withFormModel(recommendedModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(RecommendedInfoComponent)
