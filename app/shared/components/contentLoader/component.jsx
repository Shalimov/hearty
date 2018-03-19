import React from 'react'
import PropTypes from 'prop-types'
import { cssx, join } from 'utils/aphrodite-ext'
import Loader from 'react-loaders'

import styles from './styles'

const { Fragment } = React

const ContentLoaderComponent = ({
	isLoading,
	className,
	children,
	fixed = false,
}) => (
	<Fragment>
		{
			isLoading ? (
				<div className={
					join(
						cssx({
							container: true,
							fixed,
							absolute: !fixed,
						}, styles),
						className
					)
				}>
					<Loader type="ball-clip-rotate-multiple" />
				</div>
			) : children
		}
	</Fragment>
)

ContentLoaderComponent.propTypes = {
	className: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	fixed: PropTypes.bool,
	children: PropTypes.node,
}

export default ContentLoaderComponent
