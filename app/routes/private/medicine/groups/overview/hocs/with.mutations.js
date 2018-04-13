import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export default graphql(gql`
		mutation RemoveMedicineGroupMutation($_id: ID!) {
			removeMedicineGroup(_id: $_id) {
				_id
			}
		}
	`, {
	name: 'removeMedicineGroup',
})
