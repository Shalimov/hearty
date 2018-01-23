import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import EditPatientForm from '../shared/components/editPatientForm'
import styles from './styles'

const AddPatientComponent = ({ onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<EditPatientForm onSubmit={onSubmit} onCancel={onCancel} />
	</div>
)

AddPatientComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddPatientComponent
