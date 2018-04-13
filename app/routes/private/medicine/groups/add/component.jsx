import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import t from 'i18n'

import EditMedicineGroupForm from '../shared/components/editMedicineGroupForm'
import styles from './styles'

const AddMedicineGroupComponent = ({ onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<EditMedicineGroupForm
			legend={t('legends.medicine.addGroup')}
			onSubmit={onSubmit}
			onCancel={onCancel} />
	</div>
)

AddMedicineGroupComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddMedicineGroupComponent
