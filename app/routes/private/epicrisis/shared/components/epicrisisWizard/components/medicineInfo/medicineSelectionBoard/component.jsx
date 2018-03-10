import React from 'react'
import t from 'i18n'

import MedicineSelection from '../../../shared/components/medicineSelection'

const MedicineSelectionBoardComponent = (props) => (
	<MedicineSelection
		{...props}
		legend={t('legends.medicineSelection')} />
)

export default MedicineSelectionBoardComponent
