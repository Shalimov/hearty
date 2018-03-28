import React from 'react'
import PropTypes from 'prop-types'
import EpicrisisWizard from '../shared/components/epicrisisWizard'

const AddEpicrisisComponent = ({ onSubmit, onCancel }) => (
	<EpicrisisWizard
		onSubmit={onSubmit}
		onCancel={onCancel} />
)

AddEpicrisisComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddEpicrisisComponent
