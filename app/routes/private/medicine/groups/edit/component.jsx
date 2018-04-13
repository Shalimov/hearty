import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContentLoader } from 'shared/components'
import t from 'i18n'

import EditMedicineGroupForm from '../shared/components/editMedicineGroupForm'
import styles from './styles'

const EditMedicineGroupComponent = ({ data, onSubmit, onCancel }) => (
	<ContentLoader isLoading={data.loading}>
		<div className={css(styles.container)}>
			<EditMedicineGroupForm
				legend={t('legends.medicine.editGroup')}
				initialValues={data.medicineGroup}
				onSubmit={onSubmit}
				onCancel={onCancel} />
		</div>
	</ContentLoader>
)

EditMedicineGroupComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditMedicineGroupComponent
