import React from 'react'
import { Link } from 'react-router-dom'
import { patients } from 'routes/route.map'
import t from 'i18n'
// import PropTypes from 'prop-types'
// import { css } from 'aphrodite'

// import styles from './styles'

const OverviewPatientsComponent = () => (
	<div>
		Overview
		<Link to={patients.add()}>{t('links.addPatient')}</Link>
	</div>
)

OverviewPatientsComponent.propTypes = {
}

export default OverviewPatientsComponent
