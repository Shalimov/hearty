import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

export default compose(
	graphql(gql`
		mutation AddDictionarySubtermMutation($_id: ID!, $term: String!) {
			createSubterm(_id: $_id, term: $term) {
				_id
			}
		}
	`, { name: 'createSubtermMutation' }),
	graphql(gql`
		mutation AddDictionaryTermMutation($term: String!) {
			createTerm(term: $term) {
				_id
			}
		}
	`, { name: 'createTermMutation' }),
	graphql(gql`
		query DictionaryOverview($input: TermQueryInput) {
			terms(input: $input) {
				totalCount
				totalPages
				pageSize
				content {
					_id
					term
					subTerms {
						term
					}
				}
			}
		}
	`, {
		options: ({ pageSize }) => ({
			variables: {
				input: {
					limit: pageSize,
					skip: 0,
				},
			},
		}),
	})
)
