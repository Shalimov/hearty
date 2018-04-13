import { compose, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import AddMedicineComponent from './component'

export default compose(
	graphql(gql`
		mutation CreateMedicine($input: MedicineInput) {
			createMedicine(input: $input) {
				_id
			}
		}
	`, { name: 'createMedicine' }),
	withHandlers({
		onSubmit: ({ history, createMedicine }) =>
			tryAsync(async (drugData) => {
				await createMedicine({
					variables: {
						input: drugData,
					},
				})

				history.goBack()
			}),

		onCancel: ({ history }) => () => {
			history.goBack()
		},
	})
)(AddMedicineComponent)
