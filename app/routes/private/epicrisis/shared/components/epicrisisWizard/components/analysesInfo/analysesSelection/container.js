import fp from 'lodash/fp'
import { compose, lifecycle } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ego from 'utils/validation'

import AnalysesSelectionComponent from './component'

const getInitialValues = (selectedAnalyses, analyses) => {
	if (selectedAnalyses) {
		return fp.reduce((map, value) => {
			map[value.name] = value.repeatCount
			return map
		}, {}, selectedAnalyses)
	}

	return fp.countBy('name', analyses)
}

export default compose(
	withFormModel({}),
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
			fetchPolicy: 'cache-and-network',
			variables: {
				input: {
					limit: 50,
					skip: 0,
				},
			},
		},
	}),
	withWizardHooks({
		onRequestData: ({ formModel, data }) => (done) => {
			const analysesMap = fp.groupBy('name', data.analyses.content)
			const formData = fp.flow(
				fp.entries,
				fp.filter(fp.flow(fp.nth(1), Boolean)),
				fp.map(([name, repeatCount]) => ({
					name,
					repeatCount,
					analysis: fp.head(analysesMap[name]),
				})),
				selectedAnalyses => ({ selectedAnalyses }),
			)(formModel.value)

			done(null, formData)
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	}),
	lifecycle({
		componentWillMount() {
			// it makes sense when user click back
			this.componentWillReceiveProps(this.props)
		},


		componentWillReceiveProps({ data, formModel, initialValues }) {
			if (data.loading) {
				return
			}

			const { selectedAnalyses, analyses } = initialValues
			const content = fp.get('content', data.analyses)
			const initialValuesMap = getInitialValues(selectedAnalyses, analyses)
			const hasNoInitialValues = fp.isEmpty(initialValuesMap)

			for (const { name, basic } of content) {
				const initialCount = (basic && hasNoInitialValues) ? 1 : 0
				formModel.addField(
					name,
					initialValuesMap[name] || initialCount,
					Ego.number()
						.min(0)
						.max(5)
						.required()
						.label(name)
				)
			}
		},
	})
)(AnalysesSelectionComponent)
