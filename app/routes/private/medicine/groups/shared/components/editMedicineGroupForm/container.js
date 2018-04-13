import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import medicineGroupModel, { mapping } from './medicine.group.model'
import EditMedicineGroupFormComponent from './component'

export default compose(
	withFormModel(medicineGroupModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ initialValues = {}, onSubmit }) => (formData) => {
			const groupData = {
				_id: initialValues._id,
				...mapper(formData, mapping),
			}

			return onSubmit(groupData)
		},
	})
)(EditMedicineGroupFormComponent)
