import { compose, withHandlers, defaultProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import EditTermModel, { mapping } from './edit.term.model'
import EditTermFormComponent from './component'

export default compose(
	defaultProps({
		initialValues: {},
	}),
	withFormModel(EditTermModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ onSubmit, initialValues }) => (formData) => {
			const covertedModel = mapper(formData, mapping)

			onSubmit({
				_id: initialValues._id,
				...covertedModel,
			})
		},
	})
)(EditTermFormComponent)
