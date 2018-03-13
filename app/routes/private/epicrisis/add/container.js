import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { toast } from 'react-toastify'
import { tryAsync } from 'utils/try'
import t from 'i18n'

import AddEpicrisisComponent from './component'

export default compose(
	graphql(gql`
		mutation CreateEpicrisis($input: EpicrisisInput!) {
			createEpicrisis(input: $input) {
				_id
			}
		}
	`, { name: 'createEpicrisis' }),
	graphql(gql`
		mutation PrintDocTemplate($_id: ID!, $epicrisisTemplate: String!) {
			printEpicrisis(_id: $_id, epicrisisTemplate: $epicrisisTemplate)
		}
	`, { name: 'printEpicrisis' }),
	withHandlers({
		onCancel: ({ history }) => () => {
			history.goBack()
		},

		onSubmit: ({ createEpicrisis, printEpicrisis }) =>
			tryAsync(async (epicrisisData, wizardData) => {

				const { data } = await createEpicrisis({
					variables: { input: epicrisisData },
				})

				await printEpicrisis({
					variables: {
						_id: data.createEpicrisis._id,
						epicrisisTemplate: wizardData.template.name,
					},
				})

				toast.success(t('common.operationCompleted'))
			}),
	})
)(AddEpicrisisComponent)
