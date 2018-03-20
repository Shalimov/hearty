import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export default compose(
	graphql(gql`
		mutation AddDictionaryTermMutation($term: String!) {
			createTerm(term: $term) {
				_id
			}
		}
	`, {
		name: 'createTermMutation',
	}),
	graphql(gql`
		mutation AddDictionarySubtermMutation($_id: ID!, $term: String!) {
			createSubterm(_id: $_id, term: $term) {
				_id
			}
		}
	`, {
		name: 'createSubtermMutation',
	})
)
