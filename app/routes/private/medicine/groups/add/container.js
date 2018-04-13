import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'

import AddMedicineGroupComponent from './component'

export default compose(
	graphql(gql`
		mutation CreateMedicineGroup($input: MedicineGroupInput!) {
			createMedicineGroup(input: $input) {
				_id
			}
		}
	`, { name: 'createMedicineGroup' }),
	withHandlers({
		onSubmit: ({ createMedicineGroup, history }) =>
			tryAsync(async (groupData) => {
				await createMedicineGroup({
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
)(AddMedicineGroupComponent)
