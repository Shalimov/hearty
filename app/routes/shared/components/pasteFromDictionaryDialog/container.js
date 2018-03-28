import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withHandlers, withState } from 'recompose'
import { withFormModel, connectDialogToHub } from 'shared/hocs'

import PasteFromDictionaryDialogComponent from './component'
import searchModel from './search.model'

const getTermQueryInput = term => ({
	skip: 0,
	limit: 20,
	term,
})
const DELAY = 500

// TODO: should be improved
export default compose(
	withFormModel(searchModel, { spreadFields: true }),
	withState('isOpen', 'setOpenState', false),
	connectDialogToHub({
		dialogId: 'pasteFromDictionaryDialog',
		open: ({ setOpenState }) => () => {
			setOpenState(true)
		},

		close: ({ setOpenState }) => () => {
			setOpenState(false)
		},
	}),
	graphql(gql`
		query RetrieveFromDictionary($input: TermQueryInput) {
			terms(input: $input) {
				totalCount
				totalPages
				pageSize
				page
				content {
					_id
					term
					subTerms {
						term
						tags
					}
				}
			}
		}
	`, {
		options: {
			variables: {
				input: getTermQueryInput(),
			},
		},
	}),
	withHandlers({
		onTermSearch: ({ data }) => fp.debounce(DELAY, async (value, callback) => {

			const { data: { terms } } = await data.refetch({
				input: getTermQueryInput(value),
			})

			callback(fp.prop('content', terms))
		}),

		onSubtermSearch: () => (value, activeItem, callback) => {
			callback(fp.flow(
				fp.prop('subTerms'),
				fp.filter(fp.flow(
					fp.prop('term'),
					fp.toLower,
					fp.includes(fp.toLower(value)),
				))
			)(activeItem))
		},

		onChange: ({ setOpenState, emitDialogAction }) => ({ term }) => {
			setOpenState(false)
			emitDialogAction('data', term)
		},

		onRequestClose: ({ setOpenState, emitDialogAction }) => () => {
			setOpenState(false)
			emitDialogAction('data')
		},
	})
)(PasteFromDictionaryDialogComponent)
