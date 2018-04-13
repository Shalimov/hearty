import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import t from 'i18n'

import EditMedicineForm from '../shared/components/editMedicineForm'
import styles from './styles'

const AddMedicineComponent = ({ onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<EditMedicineForm
			legend={t('legends.medicine.addDrug')}
			onSubmit={onSubmit}
			onCancel={onCancel} />
	</div>
)

AddMedicineComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddMedicineComponent
