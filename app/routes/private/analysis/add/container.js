import { compose, withHandlers } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { tryAsync } from 'utils/try'

import AddAnalysisComponent from './component'

export default compose(
	graphql(gql`
		mutation CreateAnalysisMutation($input: AnalysisInput!) {
			createAnalysis(input: $input) {
				_id
			}
		}
	`, { name: 'createAnalysis' }),
	withHandlers({
		onSubmit: ({ history, createAnalysis }) =>
			tryAsync(async (formData) => {
				await createAnalysis({
					variables: {
						input: formData,
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddAnalysisComponent)
