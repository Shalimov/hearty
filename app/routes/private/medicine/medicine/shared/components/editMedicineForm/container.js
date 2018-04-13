import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import medicineModel, { mapping } from './medicine.model'
import EditMedicineFormComponent from './component'

export default compose(
	withFormModel(medicineModel, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ initialValues, onSubmit }) => (formData) => {
			onSubmit({
				_id: initialValues._id,
				...mapper(formData, mapping),
			})
		},
	})
)(EditMedicineFormComponent)
