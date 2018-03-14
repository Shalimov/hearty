import fp from 'lodash/fp'
import { compose, withHandlers, withState } from 'recompose'
import { tryAsync } from 'utils/try'

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

		onSubmit: ({ updateEpicrisisMutation, printEpicrisisMutation, history }) =>
			tryAsync(async (epicrisisData, options) => {
				const templateName = fp.get('templateName', options)

				await updateEpicrisisMutation({
					variables: { input: epicrisisData },
				})

				if (fp.isString(templateName)) {
					await printEpicrisisMutation({
						variables: {
							_id: epicrisisData._id,
							epicrisisTemplate: templateName,
						},
					})
				}

				history.goBack()
			}),
	})
)(EditEpicrisisComponent)
