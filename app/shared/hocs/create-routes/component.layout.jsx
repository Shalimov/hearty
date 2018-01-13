import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const DefaultLayout = ({ layout: Layout, component: Component, ...rest }) => (
	<Route {...rest} render={matchProps => (
		<Layout>
			<Component {...matchProps} />
		</Layout>
	)} />
)

DefaultLayout.propTypes = {
	layout: PropTypes.func.isRequired,
	component: PropTypes.func.isRequired,
}

export default DefaultLayout
