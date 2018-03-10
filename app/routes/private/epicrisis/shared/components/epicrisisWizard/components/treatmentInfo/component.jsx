import React from 'react'
import t from 'i18n'

import MedicineSelection from '../../shared/components/medicineSelection'

const TreatmentInfoComponent = (props) => (
	<MedicineSelection
		{...props}
		legend={t('legends.treatment')} />
)

export default TreatmentInfoComponent
