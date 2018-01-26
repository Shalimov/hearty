import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContentLoader } from 'shared/components'

import EditPatientForm from '../shared/components/editPatientForm'
import styles from './styles'

const EditPatientComponent = ({ data, onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<ContentLoader isLoading={data.loading}>
			<EditPatientForm initialValues={data.patient} onSubmit={onSubmit} onCancel={onCancel} />
		</ContentLoader>
	</div>
)

EditPatientComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditPatientComponent
