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
	withHandlers({
		onCancel: ({ history }) => () => {
			history.goBack()
		},

		onSubmit: ({ createEpicrisis, history }) =>
			tryAsync(async (epicrisisData) => {

				await createEpicrisis({
					variables: { input: epicrisisData },
				})

				history.goBack()

				toast.success(t('common.operationCompleted'))
			}),
	})
)(AddEpicrisisComponent)
