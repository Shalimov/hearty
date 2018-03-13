import { compose, withHandlers, withState } from 'recompose'
import { toast } from 'react-toastify'
import { tryAsync } from 'utils/try'
import t from 'i18n'

import { queryHoc, mutationHoc } from './graphql.hocs'
import EditEpicrisisComponent from './component'

export default compose(
	queryHoc,
	mutationHoc,
	withState('epicrisisCopy', 'setEpicrisis', null),
	withHandlers({
		onCancel: ({ history }) => () => {
			history.goBack()
		},

		onSubmit: ({ editEpicrisisMutation, history }) =>
			tryAsync(async (epicrisisData) => {

				await editEpicrisisMutation({
					variables: { input: epicrisisData },
				})

				history.goBack()

				toast.success(t('common.operationCompleted'))
			}),
	})
)(EditEpicrisisComponent)
