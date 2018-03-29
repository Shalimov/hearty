import fp from 'lodash/fp'
import { compose, withHandlers, withProps } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import summaryModel, { mapping } from './summary.model'
import SummaryInfoComponent from './component'

export default compose(
	withFormModel(summaryModel, { spreadFields: true }),
	withProps(({ wizardData }) => ({
		patient: fp.get('patient', Object.assign({}, ...wizardData.values())),
	})),
	withWizardHooks({
		onRequestData: ({ formModel }) => (done) => {
			done(null, mapper(formModel.value, mapping))
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	}),
	withHandlers({
		isValidDate: ({ patient }) => date => {
			return date.isSameOrAfter(patient.arrivalAt)
		},

		onInternalSubmitAndPrint: ({ formModel, onSubmit }) =>
			({ templateName }) => {
				return onSubmit(formModel.value, { templateName })
			},
	})
)(SummaryInfoComponent)
