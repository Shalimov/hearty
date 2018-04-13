import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContentLoader } from 'shared/components'
import t from 'i18n'

import EditMedicineForm from '../shared/components/editMedicineForm'
import styles from './styles'

const EditMedicineComponent = ({ data, onSubmit, onCancel }) => (
	<ContentLoader isLoading={data.loading}>
		<div className={css(styles.container)}>
			<EditMedicineForm
				legend={t('legends.medicine.addDrug')}
				onSubmit={onSubmit}
				onCancel={onCancel} />
		</div>
	</ContentLoader>
)

EditMedicineComponent.propTypes = {
	data: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditMedicineComponent
