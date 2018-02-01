import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		mutation AddDictionaryTermMutation($term: String!) {
			createTerm(term: $term) {
				_id
			}
		}
	`, { name: 'createTermMutation' }),
	graphql(gql`
		mutation UpdateDictionaryTermMutation($_id: ID!, $term: String!) {
			updateTerm(_id: $_id, term: $term) {
				_id
			}
		}
	`, { name: 'updateTermMutation' }),
	graphql(gql`
		mutation RemoveDictionaryTermMutation($_id: ID!) {
			removeTerm(_id: $_id) {
				_id
			}
		}
	`, { name: 'removeTermMutation' }),
	graphql(gql`
		mutation AddDictionarySubtermMutation($_id: ID!, $term: String!) {
			createSubterm(_id: $_id, term: $term) {
				_id
			}
		}
	`, { name: 'createSubtermMutation' }),
	graphql(gql`
		mutation AddDictionaryTermMutation($_id: ID!, $term: String!) {
			removeSubterm(_id: $_id, term: $term) {
				_id
			}
		}
	`, { name: 'removeSubtermMutation' }),
)
