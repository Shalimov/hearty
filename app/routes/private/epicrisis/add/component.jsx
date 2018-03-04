import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'aphrodite'
import EpicrisisWizard from '../shared/components/epicrisisWizard'

// import styles from './styles'

const AddEpicrisisComponent = ({ onSubmit, onCancel }) => (
	<EpicrisisWizard onSubmit={onSubmit} onCancel={onCancel} />
)

AddEpicrisisComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddEpicrisisComponent
