import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import diagnosisModel, { mapping } from './diagnosis.model'
import DiagnosisInfoComponent from './component'

export default compose(
	withFormModel(diagnosisModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: formData => mapper(formData, mapping),
	})
)(DiagnosisInfoComponent)
