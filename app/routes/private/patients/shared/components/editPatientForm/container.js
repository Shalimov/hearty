import { compose } from 'recompose'
import { withFormModel } from 'shared/hocs'

import EditPatientModel from './edit.patient.model'
import EditPatientFormComponent from './component'

export default compose(
	withFormModel(EditPatientModel, { spreadFields: true }),
)(EditPatientFormComponent)
