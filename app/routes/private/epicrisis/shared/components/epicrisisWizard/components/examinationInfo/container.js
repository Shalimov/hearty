import { compose } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import examinationModel, { mapping } from './examination.model'
import ExaminationInfoComponent from './component'

export default compose(
	withFormModel(examinationModel, { spreadFields: true }),
	withWizardHooks({
		onRequestData: ({ formModel }) => (done) => {
			done(null, mapper(formModel.value, mapping))
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	})
)(ExaminationInfoComponent)
