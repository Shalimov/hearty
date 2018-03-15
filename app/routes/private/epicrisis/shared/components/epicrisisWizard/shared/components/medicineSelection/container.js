import fp from 'lodash/fp'
import { compose, lifecycle, defaultProps } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ego from 'utils/validation'

import MedicineSelectionComponent from './component'

const getSelectedKeys = fp.flow(
	fp.entries,
	fp.filter(fp.flow(fp.nth(1), Boolean)),
	fp.map(fp.first)
)

// TODO: Refactoring
export default compose(
	defaultProps({
		transformBeforeSubmit: fp.identity,
	}),
	graphql(gql`
		query MedicineGroupsInfoRetrieve($input: MedicineGroupQueryInput) {
			medicineGroups(input: $input) {
				content {
					_id
					groupName
					listOfMedicaments {
						name
					}
				}
			}
		}
	`, {
		options: {
			fetchPolicy: 'cache-and-network',
			variables: {
				input: {
					skip: 0,
					limit: 100,
				},
			},
		},
	}),
	withFormModel({}),
	withWizard({
		transformSubmitData: ({ storeKey, transformBeforeSubmit, formModel }) => ({
			[storeKey]: transformBeforeSubmit(getSelectedKeys(formModel.value)),
		}),
	}),
	lifecycle({
		componentWillMount() {
			// it makes sense when user click back
			this.componentWillReceiveProps(this.props)
		},

		componentWillReceiveProps({ data, formModel, extractSelectedFields }) {
			if (data.loading) {
				return
			}

			const selectedFields = extractSelectedFields()
			const isSelectedMedicine = fp.includes(fp.placeholder, selectedFields)
			const content = fp.get('medicineGroups.content', data)

			fp.each((group) => {
				for (const { name } of group.listOfMedicaments) {
					formModel.addField(name, isSelectedMedicine(name), Ego.boolean().label(name))
				}
			}, content)
		},
	})
)(MedicineSelectionComponent)
