import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import examinationModel, { mapping } from './examination.model'
import ExaminationInfoComponent from './component'

export default compose(
	withFormModel(examinationModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: formData => mapper(formData, mapping),
	})
)(ExaminationInfoComponent)
