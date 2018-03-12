import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { analysis } from 'routes/route.map'
import t from 'i18n'

// import styles from './styles'

const OverviewAnalysesComponent = () => (
	<div>
		<Link to={analysis.add()}>{t('links.addAnalysis')}</Link>
	</div>
)

OverviewAnalysesComponent.propTypes = {
}

export default OverviewAnalysesComponent
