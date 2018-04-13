import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import EditMedicineGroupComponent from './component'

export default compose(
	graphql(gql`
		query RetrieveMedicineGroupQuery($_id: ID!) {
			medicineGroup(_id: $_id) {
				_id
				groupName
				priority
				note
			}
		}
	`, {
		options: ({ match }) => ({
			fetchPolicy: 'cache-and-network',
			variables: {
				_id: match.params.groupId,
			},
		}),
	}),
	graphql(gql`
		mutation UpdateMedicineGroup($input: MedicineGroupInput!) {
			updateMedicineGroup(input: $input) {
				_id
			}
		}
	`, { name: 'updateMedicineGroup' }),
	withHandlers({
		onSubmit: ({ updateMedicineGroup, history }) =>
			tryAsync(async (groupData) => {
				await updateMedicineGroup({
					variables: {
						input: groupData,
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(EditMedicineGroupComponent)
