import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps, withProps } from 'recompose'
import { tryAsync } from 'utils/try'

import columnsDescription from './column.descrtiption'

import withMutations from './hocs/with.mutations'
import withQueries from './hocs/with.queries'

import EditTermInlineForm from './components/editTermInlineForm'
import SubTermEditor from './components/subTermEditor'
import DictionaryComponent from './component'

const DEFAULT_PAGE_SIZE = 20

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withQueries,
	withMutations,
	withHandlers({
		onAddTerm: ({ createTermMutation, data }) => tryAsync(async ({ term }) => {
			await createTermMutation({
				variables: { term },
			})

			await data.refetch()
		}),

		onAddSubterm: ({ createSubtermMutation, data }) => tryAsync(async (dictionaryTerm) => {
			await createSubtermMutation({ variables: dictionaryTerm })
			await data.refetch()
		}),

		onEditTerm: ({ updateTermMutation }) =>
			tryAsync(async (dictionaryTerm) => {
				await updateTermMutation({ variables: dictionaryTerm })
			}),

		// TODO: maybe use refetch to do it
		onFetchData: ({ data }) =>
			tryAsync(async (state) => {
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
			}),
	}),
	withProps(({ onAddSubterm, onEditTerm }) => ({
		columns: columnsDescription(
			withProps(({ value }) => ({
				initialValues: value,
				onSubmit: onEditTerm,
			}))(EditTermInlineForm)
		),
		SubTermEditor: withProps({
			onAddSubterm,
		})(SubTermEditor),
	}))
)(DictionaryComponent)

