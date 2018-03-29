import { compose } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import usdScopiaModel, { mapping } from './usd.scopia.model'
import USDScopiaInfoComponent from './component'

export default compose(
	withFormModel(usdScopiaModel, { spreadFields: true }),
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
)(USDScopiaInfoComponent)
