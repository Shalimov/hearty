import { compose, withHandlers, withState, defaultProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import EditGroupModel, { mapping } from './edit.group.model'
import EditInlineFormComponent from './component'

export default compose(
	defaultProps({
		initialValues: {},
	}),
	withState('isEditting', 'setEditState', ({ onlyEditor }) => Boolean(onlyEditor)),
	withFormModel(EditGroupModel, { spreadFields: true }),
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

			if (covertedModel.value && initialValues.value !== covertedModel.value) {
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
)(EditInlineFormComponent)
