import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import usdScopiaModel, { mapping } from './usd.scopia.model'
import USDScopiaInfoComponent from './component'

export default compose(
	withFormModel(usdScopiaModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(USDScopiaInfoComponent)
