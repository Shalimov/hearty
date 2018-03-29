import { compose } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import ctModel, { mapping } from './ct.model'
import CTInfoComponent from './component'

export default compose(
	withFormModel(ctModel, { spreadFields: true }),
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
)(CTInfoComponent)
