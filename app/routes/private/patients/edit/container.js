import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import EditPatientComponent from './component'

export default compose(
	graphql(gql`
		mutation EditPatientMutation($input: PatientInput) {
			updatePatient(input: $input)
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
		onSubmit: () => () => {
			alert('Submit')
		},

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditPatientComponent)
