import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		mutation AddMedicineGroupMutation($groupName: String!) {
			createMedicineGroup(groupName: $groupName) {
				_id
			}
		}
	`, {
		name: 'createMedicineGroupMutation',
	}),
	graphql(gql`
		mutation UpdateMedicineGroupMutation($_id: ID!, $groupName: String!) {
			updateMedicineGroup(_id: $_id, groupName: $groupName) {
				_id
				groupName
			}
		}
	`, {
		name: 'updateMedicineGroupMutation',
	}),
	graphql(gql`
		mutation RemoveMedicineGroupMutation($_id: ID!) {
			removeMedicineGroup(_id: $_id) {
				_id
			}
		}
	`, {
		name: 'removeMedicineGroupMutation',
	}),
	graphql(gql`
		mutation AddMedicineMutation($_id: ID!, $name: String!) {
			createMedicine(_id: $_id, name: $name) {
				_id
			}
		}
	`, {
		name: 'createMedicineMutation',
	}),
	graphql(gql`
		mutation RemoveMedicineMutation($_id: ID!, $name: String!) {
			removeMedicine(_id: $_id, name: $name) {
				_id
			}
		}
	`, {
		name: 'removeMedicineMutation',
	}),
)
