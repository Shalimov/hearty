import React from 'react'
import PropTypes from 'prop-types'
import EpicrisisWizard from '../shared/components/epicrisisWizard'

import { getEmptyEpicrisis } from './empty.epicrisis'

const AddEpicrisisComponent = ({ onSubmit, onCancel }) => (
	<EpicrisisWizard
		availableStepSelection={true}
		initialValues={getEmptyEpicrisis()}
		onSubmit={onSubmit}
		onCancel={onCancel} />
)

AddEpicrisisComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AddEpicrisisComponent
