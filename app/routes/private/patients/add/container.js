import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import AddPatientComponent from './component'

export default compose(
	graphql(gql`
		mutation AddPatientMutation($input: PatientInput){
			createPatient(input: $input)
		}
	`),
	withHandlers({
		onSubmit: () => () => {
			alert('Submit')
		},

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddPatientComponent)
