import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { toast } from 'react-toastify'
import gql from 'graphql-tag'
import mapper from 'utils/simple.mapper'
import log from 'utils/logger'

import EditPatientComponent from './component'
import patientMapping from './patient.mapping'

export default compose(
	graphql(gql`
		mutation EditPatientMutation($input: PatientInput) {
			updatePatient(input: $input) {
				_id
			}
		}
	`, { name: 'editPatientMutation' }),
	graphql(gql`
		query RetrievePatientQuery($id: ID) {
			patient(id: $id) {
				_id
				fullname
				birthdate
				region
				address
			}
		}
	`, {
		options: ({ match }) => ({
			variables: { id: match.params.patientId },
		}),
	}),
	withHandlers({
		onSubmit: ({ editPatientMutation, history, data }) => async (formData) => {
			const changes = mapper(formData, patientMapping)

			try {
				await editPatientMutation({
					variables: {
						input: {
							_id: data.patient._id,
							...changes,
						},
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
