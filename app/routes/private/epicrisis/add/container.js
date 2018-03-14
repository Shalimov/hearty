import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'

import AddEpicrisisComponent from './component'

export default compose(
	graphql(gql`
		mutation PrintDocTemplate($_id: ID!, $epicrisisTemplate: String!) {
			printEpicrisis(_id: $_id, epicrisisTemplate: $epicrisisTemplate)
		}
	`, { name: 'printEpicrisisMutation' }),
	graphql(gql`
		mutation CreateEpicrisis($input: EpicrisisInput!) {
			createEpicrisis(input: $input) {
				_id
			}
		}
	`, { name: 'createEpicrisisMutation' }),
	withHandlers({
		onCancel: ({ history }) => () => {
			history.goBack()
		},

		onSubmit: ({ createEpicrisisMutation, printEpicrisisMutation, history }) =>
			tryAsync(async (epicrisisData, options) => {
				const templateName = fp.get('templateName', options)

				await createEpicrisisMutation({
					variables: { input: epicrisisData },
				})

				if (fp.isString(templateName)) {
					await printEpicrisisMutation({
						variables: {
							_id: epicrisisData._id,
							epicrisisTemplate: templateName,
						},
					})
				}

				history.goBack()
			}),
	})
)(AddEpicrisisComponent)
