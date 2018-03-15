import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import ctModel, { mapping } from './ct.model'
import CTInfoComponent from './component'

export default compose(
	withFormModel(ctModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: (_props, formData) => mapper(formData, mapping),
	})
)(CTInfoComponent)
