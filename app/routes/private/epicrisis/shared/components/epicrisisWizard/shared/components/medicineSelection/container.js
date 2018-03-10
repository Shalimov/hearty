import fp from 'lodash/fp'
import { compose, lifecycle, withHandlers, defaultProps } from 'recompose'
import { withFormModel } from 'shared/hocs'
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
			variables: {
				input: {
					skip: 0,
					limit: 100,
				},
			},
		},
	}),
	withFormModel({}),
	withHandlers({
		onInternalSubmit: ({ onSubmit, storeKey, transformBeforeSubmit }) =>
			(selectedValues) => {
				onSubmit({
					[storeKey]: transformBeforeSubmit(getSelectedKeys(selectedValues)),
				})
			},
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
