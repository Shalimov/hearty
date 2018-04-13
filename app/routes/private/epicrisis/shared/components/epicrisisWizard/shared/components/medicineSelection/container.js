import fp from 'lodash/fp'
import { compose, lifecycle } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ego from 'utils/validation'

import MedicineSelectionComponent from './component'

const getSelectedKeys = fp.flow(
	fp.entries,
	fp.filter(fp.flow(fp.nth(1), fp.get('value'), Boolean)),
	fp.map(([key, data]) => ({ value: key, meta: data.meta }))
)

// TODO: Refactoring make unlimited number or groups
export default compose(
	withFormModel({}),
	graphql(gql`
		query MedicineGroupsInfoRetrieve($input: MedicineGroupQueryInput) {
			medicineGroups(input: $input) {
				content {
					_id
					groupName
					priority
					listOfMedicaments {
						_id
						name
						prescription
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
	withWizardHooks({
		onRequestData: ({
			storeKey,
			formModel,
			postTransform = fp.identity,
		}) => (done) => {
			done(null, { [storeKey]: postTransform(getSelectedKeys(formModel.valueWithMeta)) })
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
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
				for (const medicine of group.listOfMedicaments) {
					const { name } = medicine
					formModel.addField({ 
						name, 
						initialValue: isSelectedMedicine(name), 
						scheme: Ego.boolean().label(name),
						meta: { group, medicine },
					}) 
				}
			}, content)
		},
	})
)(MedicineSelectionComponent)
