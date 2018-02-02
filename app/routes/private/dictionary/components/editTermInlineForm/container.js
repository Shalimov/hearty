import { compose, withHandlers, withState, defaultProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import EditTermModel, { mapping } from './edit.term.model'
import EditTermInlineFormComponent from './component'

export default compose(
	defaultProps({
		initialValues: {},
	}),
	withState('isEditting', 'setEditState', ({ onlyEditor }) => Boolean(onlyEditor)),
	withFormModel(EditTermModel, { spreadFields: true }),
	withHandlers({
		onEditMode: ({ setEditState }) => () => {
			const isEditting = true
			setEditState(isEditting)
		},

		onInternalSubmit: ({
			onSubmit,
			formModel,
			initialValues,
			setEditState,
			onlyEditor,
		}) => () => {
			const covertedModel = mapper(formModel.value, mapping)

			if (covertedModel.term && initialValues.term !== covertedModel.term) {
				onSubmit({
					_id: initialValues._id,
					...covertedModel,
				})
			}

			if (!onlyEditor) {
				const isEditting = false
				setEditState(isEditting)
			}
		},
	})
)(EditTermInlineFormComponent)
