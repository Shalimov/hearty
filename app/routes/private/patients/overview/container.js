import fp from 'lodash/fp'
import Ego from 'utils/validation'
import { withFormModel } from 'shared/hocs'
import { compose, withHandlers, withState, defaultProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import OverviewPatientComponent from './component'
import { columnsDescription } from './columns.description'

const DEFAULT_PAGE_SIZE = 20
const toFilterStruct = search => [{ id: 'all', value: search }]

export default compose(
	defaultProps({
		columns: columnsDescription,
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withFormModel({
		searchField: Ego.any(),
	}, { spreadFields: true }),
	withState('filtered', 'setSearchValue', toFilterStruct('')),
	graphql(gql`
		query PatientOverview($input: PatientQueryInput) {
			patients(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					fullname
					birthdate
					region
					address
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
		onSearch: ({ setSearchValue, searchField }) => () => {
			const filter = toFilterStruct(searchField.value)
			setSearchValue(filter)
		},

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
)(OverviewPatientComponent)
