import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { toast } from 'react-toastify'
import gql from 'graphql-tag'
import log from 'utils/logger'

import AddTermComponent from './component'

export default compose(
	graphql(gql`
		mutation AddTermMutation($input: PatientInput) {
			createTerm(term: String!) {
				_id
			}
		}
	`, { name: 'createTermMutation' }),
	withHandlers({
		onSubmit: ({ createTermMutation, history }) => async ({ term }) => {
			try {
				await createTermMutation({ variables: { term } })
				history.goBack()
			} catch (error) {
				toast.error(error.message)
				log.error(error)
			}
		},

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddTermComponent)
