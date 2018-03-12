import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContentLoader } from 'shared/components'
import t from 'i18n'

import EditAnalysisForm from '../shared/components/editAnalysisForm'
import styles from './styles'

const EditAnalysisComponent = ({ data, onSubmit, onCancel }) => (
	<ContentLoader isLoading={data.loading}>
		<div className={css(styles.container)}>
			<EditAnalysisForm
				legend={t('legends.editAnalysis')}
				initialValues={data.analysis}
				onSubmit={onSubmit}
				onCancel={onCancel} />
		</div>
	</ContentLoader>
)

EditAnalysisComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditAnalysisComponent
