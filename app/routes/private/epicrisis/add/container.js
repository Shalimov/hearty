import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { epicrisis } from 'routes/route.map'

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
			history.push(epicrisis.index(), { skipConfirm: true })
		},

		onSubmit: ({ createEpicrisisMutation, printEpicrisisMutation, history }) =>
			tryAsync(async (epicrisisData, options) => {
				const templateName = fp.get('templateName', options)

				const { data: { createEpicrisis } } = await createEpicrisisMutation({
					variables: { input: epicrisisData },
				})

				if (fp.isString(templateName)) {
					await printEpicrisisMutation({
						variables: {
							epicrisisTemplate: templateName,
							_id: createEpicrisis._id,
						},
					})
				}

				history.push(epicrisis.index(), { skipConfirm: true })
			}),
	})
)(AddEpicrisisComponent)
