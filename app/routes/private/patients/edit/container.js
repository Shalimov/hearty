import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { toast } from 'react-toastify'
import gql from 'graphql-tag'
import log from 'utils/logger'

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
		onSubmit: ({ editPatientMutation, history }) => async (patientModel) => {
			try {
				await editPatientMutation({
					variables: {
						input: patientModel,
					},
				})

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
)(EditPatientComponent)
