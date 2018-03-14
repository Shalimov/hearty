import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { ContentLoader } from 'shared/components'

import EpicrisisWizard from '../shared/components/epicrisisWizard'

const EditEpicrisisComponent = ({ data, onSubmit, onCancel }) => (
	<ContentLoader isLoading={data.loading}>
		<EpicrisisWizard
			stepSelection={true}
			initialValues={fp.clone(data.epicrisis)}
			onSubmit={onSubmit}
			onCancel={onCancel} />
	</ContentLoader>
)

EditEpicrisisComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditEpicrisisComponent
