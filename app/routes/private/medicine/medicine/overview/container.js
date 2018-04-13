import { compose, defaultProps, withHandlers, withProps } from 'recompose'
import { tryAsync } from 'utils/try'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import columnsDescriptions from './column.descrtiption'
import MedicineOverviewComponent from './component'
import LeftControls from './components/leftControls'
import RightControls from './components/rightControls'

const DEFAULT_PAGE_SIZE = 15

export default compose(
	defaultProps({
		pageSize: DEFAULT_PAGE_SIZE,
	}),
	graphql(gql`
		query RetrieveMedicineGroupQuery($_id: ID!) {
			medicineGroup(_id: $_id) {
				_id
				groupName
				priority
				note
				listOfMedicaments {
					_id
					name
					prescription
				}
			}
		}
	`, {
		options: ({ match }) => ({
			fetchPolicy: 'cache-and-network',
			variables: {
				_id: match.params.groupId,
			},
		}),
	}),
	graphql(gql`
		mutation RemoveMedicine($_gid: ID!, $_id: ID!) {
			removeMedicine(_gid: $_gid, _id: $_id) {
				_id
			}
		}
	`, { name: 'removeMedicine' }),
	withHandlers({
		onRemove: ({ match, removeMedicine }) =>
			tryAsync(async (medicineId) => {
				const { groupId } = match.params

				await removeMedicine({
					variables: { _gid: groupId, _id: medicineId },
					refetchQueries: ['RetrieveMedicineGroupQuery'],
				})
			}),

		onGoBack: ({ history }) => () => {
			history.goBack()
		},
	}),
	withProps(({ onRemove, match }) => {
		const warpLeftControl = withProps({ groupId: match.params.groupId })
		const wrapRightControl = withProps({ onRemove })

		return {
			columns: columnsDescriptions(
				warpLeftControl(LeftControls),
				wrapRightControl(RightControls)
			),
		}
	})
)(MedicineOverviewComponent)
