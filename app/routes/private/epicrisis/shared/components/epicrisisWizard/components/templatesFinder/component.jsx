import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'

import styles from './styles'

const TemplatesFinderComponent = ({ data }) => (
	<div>{!data.loading && data.epicrisisTemplates}</div>
)

TemplatesFinderComponent.propTypes = {
}

export default TemplatesFinderComponent
