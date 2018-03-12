import fp from 'lodash/fp'
import { compose, withHandlers, defaultProps, withProps, withState } from 'recompose'
import { tryAsync } from 'utils/try'

import columnsDescription from './column.descrtiption'

import withMutations from './hocs/with.mutations'
import withQueries from './hocs/with.queries'

import ControlsCell from './components/controlsCell'
import EditTermInlineForm from './components/editTermInlineForm'
import SubTermEditor from './components/subTermEditor'
import DictionaryComponent from './component'

const DEFAULT_PAGE_SIZE = 15

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	withState('queryInput', 'setQueryInput', ({ pageSize }) => ({
		limit: pageSize,
		skip: 0,
	})),
	withQueries,
	withMutations,
	withHandlers({
		onAddTerm: ({ createTermMutation }) =>
			tryAsync(dictionaryTerm => createTermMutation({
				variables: dictionaryTerm,
				refetchQueries: ['DictionaryOverviewQuery'],
			})),

		onAddSubterm: ({ createSubtermMutation }) =>
			tryAsync(dictionaryTerm => createSubtermMutation({
				variables: dictionaryTerm,
				refetchQueries: ['DictionaryOverviewQuery'],
			})),

		onEditTerm: ({ updateTermMutation }) =>
			tryAsync(dictionaryTerm => updateTermMutation({ variables: dictionaryTerm })),

		onRemoveTerm: ({ removeTermMutation }) =>
			tryAsync(({ _id }) => removeTermMutation({
				variables: { _id },
				refetchQueries: ['DictionaryOverviewQuery'],
			})),

		// parent term id, subterm aka term here
		onRemoveSubterm: ({ removeSubtermMutation }) =>
			tryAsync(({ term }, { _id }) => removeSubtermMutation({
				variables: { _id, term },
				refetchQueries: ['DictionaryOverviewQuery'],
			})),

		onFetchData: ({ data, pageSize, loadMore, setQueryInput }) =>
			tryAsync((state) => {
				if (data.loading) {
					return
				}

				const filterCriteria = fp.head(state.filtered) || {}
				const queryInput = {
					limit: pageSize,
					skip: state.page * pageSize,
					term: filterCriteria.value,
				}

				setQueryInput(queryInput)

				return loadMore(queryInput)
			}),
	}),
	withProps(({ onEditTerm, onRemoveTerm, onAddSubterm, onRemoveSubterm }) => {
		const wrappedEditTermInlineForm = withProps(({ value }) => ({
			initialValues: value,
			onSubmit: onEditTerm,
		}))(EditTermInlineForm)

		const wrappedControlCell = withProps({
			onRemove: onRemoveTerm,
		})(ControlsCell)

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

