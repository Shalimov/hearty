import fp from 'lodash/fp'
import { compose, withHandlers, withProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import summaryModel, { mapping } from './summary.model'
import SummaryInfoComponent from './component'

export default compose(
	withFormModel(summaryModel, { spreadFields: true }),
	withProps(({ wizardData }) => ({
		patient: fp.get('patient', Object.assign({}, ...wizardData.values())),
	})),
	withHandlers({
		isValidDate: ({ patient }) => date => {
			return date.isSameOrAfter(patient.arrivalAt)
		},

		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel)
		},

		onInternalSubmitAndPrint: ({ formModel, onSubmit }) => ({ templateName }) => {
			const mappedModel = mapper(formModel.value, mapping)
			return onSubmit(mappedModel, { templateName })
		},
	})
)(SummaryInfoComponent)
