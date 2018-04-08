import fp from 'lodash/fp'
import { compose, withHandlers, withState } from 'recompose'
import { tryAsync } from 'utils/try'
import { epicrisis } from 'routes/route.map'

import { queryHoc, mutationHoc } from './graphql.hocs'
import EditEpicrisisComponent from './component'

export default compose(
	queryHoc,
	mutationHoc,
	withState('epicrisisCopy', 'setEpicrisis', null),
	withHandlers({
		onCancel: ({ history }) => () => {
			history.push(epicrisis.index(), { skipConfirm: true })
		},

		onSubmit: ({ updateEpicrisisMutation, printEpicrisisMutation, history }) =>
			tryAsync(async (epicrisisData, options) => {
				const templateName = fp.get('templateName', options)

				const { data: { updateEpicrisis } } = await updateEpicrisisMutation({
					variables: { input: epicrisisData },
				})

				if (fp.isString(templateName)) {
					await printEpicrisisMutation({
						variables: {
							epicrisisTemplate: templateName,
							_id: updateEpicrisis._id,
						},
					})
				}

				history.push(epicrisis.index(), { skipConfirm: true })
			}),
	})
)(EditEpicrisisComponent)
