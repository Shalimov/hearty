import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import xrayModel, { mapping } from './xray.model'
import XRayInfoComponent from './component'

export default compose(
	withFormModel(xrayModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: ({ formModel }) => mapper(formModel.value, mapping),
	})
)(XRayInfoComponent)
