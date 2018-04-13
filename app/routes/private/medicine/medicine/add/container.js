import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import AddMedicineComponent from './component'

export default compose(
	graphql(gql`
		mutation CreateMedicine($input: MedicineInput!) {
			createMedicine(input: $input) {
				_id
			}
		}
	`, { name: 'createMedicine' }),
	withHandlers({
		onSubmit: ({ match, history, createMedicine }) =>
			tryAsync(async (drugData) => {
				const getDrugData = fp.assign({ _gid: match.params.groupId })

				await createMedicine({
					variables: {
						input: getDrugData(drugData),
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddMedicineComponent)
