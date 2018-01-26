import fp from 'lodash/fp'
import Ego from 'utils/validation'
// import { toast } from 'react-toastify'
import { withFormModel } from 'shared/hocs'
import { compose, withHandlers, withState, defaultProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import OverviewPatientComponent from './component'
import { columnsDescription } from './columns.description'

const DEFAULT_PAGE_SIZE = 20

export default compose(
	defaultProps({
		columns: columnsDescription,
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withFormModel({
		searchField: Ego.string(),
	}, { spreadFields: true }),
	withState('filtered', 'setSearchValue', [{ id: 'all', value: '' }]),
	graphql(gql`
		query PatientOverview($input: PatientQueryInput) {
			patients(input: $input) {
				totalCount
				totalPages
				pageSize
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
			setSearchValue(searchField.value)
		},

		onFetchData: ({ data }) =>
			async (state) => {
				if (data.loading) {
					return
				}

				data.fetchMore({
					variables: {
						input: {
							limit: DEFAULT_PAGE_SIZE,
							skip: state.page * DEFAULT_PAGE_SIZE,
						},
					},
					updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
				})

				// const sortCriteria = fp.head(state.sorted) || {}
				// const filterCriteria = fp.head(state.filtered) || {}
			},
	}),
)(OverviewPatientComponent)
