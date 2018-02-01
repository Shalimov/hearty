import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import EditTermForm from '../shared/components/editTermForm'
import styles from './styles'

const AddTermComponent = ({ onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<EditTermForm onSubmit={onSubmit} onCancel={onCancel} />
	</div>
)

AddTermComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddTermComponent
