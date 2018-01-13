import React from 'react'
import PropTypes from 'prop-types'
import { cssx } from 'utils/aphrodite-ext'
import Loader from 'react-loaders'

import styles from './styles'

const { Fragment } = React

const ContentLoaderComponent = ({
	isLoading,
	children,
	fixed = false,
}) => (
	<Fragment>
		{
			isLoading ? (
				<div className={cssx({
					container: true,
					fixed,
					absolute: !fixed,
				}, styles)}>
					<Loader type="ball-clip-rotate-multiple" />
				</div>
			) : children
		}
	</Fragment>
)

ContentLoaderComponent.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	fixed: PropTypes.bool,
	children: PropTypes.node,
}

export default ContentLoaderComponent
