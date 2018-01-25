import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { toast } from 'react-toastify'
import gql from 'graphql-tag'
import mapper from 'utils/simple.mapper'
import log from 'utils/logger'

import AddPatientComponent from './component'
import patientMapping from './patient.mapping'

export default compose(
	graphql(gql`
		mutation AddPatientMutation($input: PatientInput){
			createPatient(input: $input) {
				_id
			}
		}
	`, { name: 'createPatientMutation' }),
	withHandlers({
		onSubmit: ({ createPatientMutation, history }) => async (formModel) => {
			const patientModel = mapper(formModel, patientMapping)
			try {
				await createPatientMutation({
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
)(AddPatientComponent)
