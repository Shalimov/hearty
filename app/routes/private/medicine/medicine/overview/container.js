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
	withHandlers({
		onRemove: () =>
			tryAsync(async () => {
			}),

		onGoBack: ({ history }) => () => {
			history.goBack()
		},
	}),
	withProps(({ onRemove }) => {
		const wrappedRightControl = withProps({ onRemove })

		return {
			columns: columnsDescriptions(
				LeftControls,
				wrappedRightControl(RightControls)
			),
		}
	})
)(MedicineOverviewComponent)
