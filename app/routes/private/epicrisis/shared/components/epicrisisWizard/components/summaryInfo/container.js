import moment from 'moment'
import { compose, withHandlers } from 'recompose'
import { withFormModel } from 'shared/hocs'
import mapper from 'utils/simple.mapper'

import summaryModel, { mapping } from './summary.model'
import SummaryInfoComponent from './component'

export default compose(
	withFormModel(summaryModel, { spreadFields: true }),
	withHandlers({
		isValidDate: () => date => moment()
			.startOf('day')
			.isSameOrBefore(date.startOf('day')),

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
