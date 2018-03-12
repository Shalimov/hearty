import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import EditAnalysisComponent from './component'

export default compose(
	graphql(gql`
		query RetrieveAnalysisQuery($_id: ID!) {
			analysis(_id: $_id) {
				_id
				name
				pattern
				basic
			}
		}
	`, {
		options: ({ match }) => ({
			variables: {
				_id: match.params.analysisId,
			},
		}),
	}),
	graphql(gql`
		mutation UpdateAnalysisMutation($input: AnalysisInput!) {
			updateAnalysis(input: $input) {
				_id
			}
		}
	`, { name: 'updateAnalysis' }),
	withHandlers({
		onSubmit: ({ history, data, updateAnalysis }) =>
			tryAsync(async (formData) => {
				await updateAnalysis({
					variables: {
						input: {
							...formData,
							_id: data.analysis._id,
						},
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditAnalysisComponent)
