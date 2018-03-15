import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import usdScopiaModel, { mapping } from './usd.scopia.model'
import USDScopiaInfoComponent from './component'

export default compose(
	withFormModel(usdScopiaModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: formData => mapper(formData, mapping),
	})
)(USDScopiaInfoComponent)
