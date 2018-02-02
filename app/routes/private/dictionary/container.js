import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps, withProps } from 'recompose'
import { tryAsync } from 'utils/try'

import columnsDescription from './column.descrtiption'

import withMutations from './hocs/with.mutations'
import withQueries, { OverviewQuery } from './hocs/with.queries'

import ControlsCell from './components/controlsCell'
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
		onAddTerm: ({ createTermMutation, data }) => tryAsync(async (dictionaryTerm) => {
			await createTermMutation({ variables: dictionaryTerm })

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

		onRemoveTerm: ({ removeTermMutation, data: queryData }) =>
			tryAsync(async ({ _id }) => {
				await removeTermMutation({
					variables: { _id },
					update: (proxy, { data: { removeTerm } }) => {
						const storedData = proxy.readQuery({
							query: OverviewQuery,
							variables: queryData.variables,
						})

						const termsStore = storedData.terms
						termsStore.content = fp.reject({ _id: removeTerm._id }, termsStore.content)
						termsStore.totalCount -= 1 

						proxy.writeQuery({
							query: OverviewQuery,
							variables: queryData.variables,
							data: storedData,
						})
					},
				})
			}),

		onRemoveSubterm: ({ removeSubtermMutation }) =>
			tryAsync(async ({ _id }) => {
				await removeSubtermMutation({ variables: { _id } })
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
	withProps(({ onEditTerm, onRemoveTerm, onAddSubterm, onRemoveSubterm }) => {
		const wrappedEditTermInlineForm = withProps(({ value }) => ({
			initialValues: value,
			onSubmit: onEditTerm,
		}))(EditTermInlineForm)

		const wrappedControlCell = withProps({ onRemoveTerm })(ControlsCell)

		return {
			columns: columnsDescription(
				wrappedEditTermInlineForm,
				wrappedControlCell
			),
			SubTermEditor: withProps({
				onAddSubterm,
				onRemoveSubterm,
			})(SubTermEditor),
		}
	})
)(DictionaryComponent)

