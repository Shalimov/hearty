import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import EditPatientComponent from './component'

export default compose(
	graphql(gql`
		mutation EditPatientMutation($input: PatientInput) {
			updatePatient(input: $input) {
				_id
			}
		}
	`, { name: 'editPatientMutation' }),
	graphql(gql`
		query RetrievePatientQuery($_id: ID) {
			patient(_id: $id) {
				_id
				fullname
				birthdate
				region
				address
			}
		}
	`, {
		options: ({ match }) => ({
			variables: { _id: match.params.patientId },
		}),
	}),
	withHandlers({
		onSubmit: ({ editPatientMutation, history }) =>
			tryAsync(async (patientModel) => {
				await editPatientMutation({
					variables: {
						input: patientModel,
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditPatientComponent)
