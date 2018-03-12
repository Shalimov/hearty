import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import t from 'i18n'

import EditAnalysisForm from '../shared/components/editAnalysisForm'
import styles from './styles'

const EditAnalysisComponent = ({ data, onSubmit, onCancel }) => (
	<div className={css(styles.container)}>
		<EditAnalysisForm
			legend={t('legends.addAnalysis')}
			initialValues={data}
			onSubmit={onSubmit}
			onCancel={onCancel} />
	</div>
)

EditAnalysisComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditAnalysisComponent
