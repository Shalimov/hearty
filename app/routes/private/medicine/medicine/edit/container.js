import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import EditMedicineComponent from './component'

export default compose(
	graphql(gql`
		query RetrieveMedicineGroupQuery($_id: ID!) {
			medicineGroup(_id: $_id) {
				_id
				groupName
				priority
				note
				listOfMedicaments {
					_id
					name
					prescription
				}
			}
		}
	`, {
		options: ({ match }) => ({
			fetchPolicy: 'cache-and-network',
			variables: {
				_id: match.params.groupId,
			},
		}),

		props: ({ data, ownProps }) => {
			const { match } = ownProps
			const findMedicine = fp.flow(
				fp.prop('medicineGroup.listOfMedicaments'),
				fp.find({ _id: match.params.medicineId })
			)

			return {
				data,
				initialValues: findMedicine(data),
			}
		},
	}),
	graphql(gql`
		mutation UpdateMedicine($input: MedicineInput!) {
			updateMedicine(input: $input) {
				_id
			}
		}
	`, { name: 'updateMedicine' }),
	withHandlers({
		onSubmit: ({ updateMedicine, history, match }) =>
			tryAsync(async (drugData) => {
				const input = {
					_gid: match.params.groupId,
					...drugData,
				}

				await updateMedicine({
					variables: { input },
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditMedicineComponent)
