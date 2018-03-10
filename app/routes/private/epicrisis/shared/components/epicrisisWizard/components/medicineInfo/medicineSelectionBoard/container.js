import fp from 'lodash/fp'
import { compose, withProps } from 'recompose'

import MedicineSelectionBoardComponent from './component'

export default compose(
	withProps(({ initialValues }) => ({
		storeKey: 'selectedMedicineFields',
		extractSelectedFields: () => {
			const { selectedMedicineFields, medicineRecommendations } = initialValues
			return selectedMedicineFields ?
				selectedMedicineFields :
				fp.map('medicine', medicineRecommendations)
		},
	}))
)(MedicineSelectionBoardComponent)
