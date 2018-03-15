import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import recommendedModel, { mapping } from './recommended.model'
import RecommendedInfoComponent from './component'

export default compose(
	withFormModel(recommendedModel, { spreadFields: true }),
	withWizard({
		transformSubmitData: formData => mapper(formData, mapping),
	})
)(RecommendedInfoComponent)
