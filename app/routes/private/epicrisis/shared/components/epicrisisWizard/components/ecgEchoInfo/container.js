import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import ecgEchoModel, { mapping } from './ecg.echo.model'
import ECGEchoInfoComponent from './component'

export default compose(
	withFormModel(ecgEchoModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: (_props, formData) => mapper(formData, mapping),
	})
)(ECGEchoInfoComponent)
