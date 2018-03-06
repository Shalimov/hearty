import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import ecgEchoModel, { mapping } from './ecg.echo.model'
import ECGEchoInfoComponent from './component'

export default compose(
	withFormModel(ecgEchoModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},
	})
)(ECGEchoInfoComponent)
