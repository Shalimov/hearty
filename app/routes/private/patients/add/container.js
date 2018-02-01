import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import AddPatientComponent from './component'

export default compose(
	graphql(gql`
		mutation AddPatientMutation($input: PatientInput) {
			createPatient(input: $input) {
				_id
			}
		}
	`, { name: 'createPatientMutation' }),
	withHandlers({
		onSubmit: ({ createPatientMutation, history }) =>
			tryAsync(async (patientModel) => {
				await createPatientMutation({
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
)(AddPatientComponent)
