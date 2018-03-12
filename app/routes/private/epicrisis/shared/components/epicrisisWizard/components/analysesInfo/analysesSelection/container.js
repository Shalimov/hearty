import fp from 'lodash/fp'
import { compose, withHandlers, lifecycle } from 'recompose'
import { withFormModel } from 'shared/hocs'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ego from 'utils/validation'

import AnalysesSelectionComponent from './component'

export default compose(
	graphql(gql`
		query AnalysisOverviewQuery($input: AnalysisQueryInput) {
			analyses(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					name
					pattern
					basic
				}
			}
		}
	`, {
		options: {
			variables: {
				input: {
					limit: 50,
					skip: 0,
				},
			},
		},
	}),
	withFormModel({}),
	withHandlers({
		onInternalSubmit: () => () => {
		},
	}),
	lifecycle({
		componentWillMount() {
			// it makes sense when user click back
			this.componentWillReceiveProps(this.props)
		},

		componentWillReceiveProps({ data, formModel }) {
			if (data.loading) {
				return
			}

			const content = fp.get('content', data.analyses)
			
			for (const { name, basic } of content) {
				const initialCount = basic ? 1 : 0
				formModel.addField(
					name, 
					initialCount, 
					Ego.number()
						.min(0)
						.max(5)
						.required()
						.label(name)
				)
			}

			// const selectedFields = 
			// const isSelectedMedicine = fp.includes(fp.placeholder, selectedFields)
			// const content = fp.get('medicineGroups.content', data)

			// fp.each((group) => {
			// 	for (const { name } of group.listOfMedicaments) {
			// 		formModel.addField(name, isSelectedMedicine(name), Ego.number().label(name))
			// 	}
			// }, content)
		},
	})
)(AnalysesSelectionComponent)
