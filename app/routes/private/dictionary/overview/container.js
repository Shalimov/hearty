import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import columnsDescription from './column.descrtiption'

import DictionaryComponent from './component'

const DEFAULT_PAGE_SIZE = 10

export default compose(
	defaultProps({
		columns: columnsDescription,
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	graphql(gql`
		query DictionaryOverview($input: TermQueryInput) {
			terms(input: $input) {
				totalCount
				totalPages
				pageSize
				content {
					_id
					term
					subTerms
				}
			}
		}
	`, {
		options: {
			variables: {
				input: {
					limit: DEFAULT_PAGE_SIZE,
					skip: 0,
				},
			},
		},
	}),
	withHandlers({
		// TODO: maybe use refetch to do it
		onFetchData: ({ data }) =>
			async (state) => {
				if (data.loading) {
					return
				}
				
				const filterCriteria = fp.head(state.filtered) || {}

				data.fetchMore({
					variables: {
						input: {
							limit: DEFAULT_PAGE_SIZE,
							skip: state.page * DEFAULT_PAGE_SIZE,
							term: filterCriteria.value,
						},
					},
					updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
				})
			},
	}),
)(DictionaryComponent)

