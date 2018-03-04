import React from 'react'
import { Link } from 'react-router-dom'
import { epicrisis } from 'routes/route.map'

const OverviewEpicrisisComponent = () => (
	<Link to={epicrisis.add()}>
		Test
	</Link>
)

OverviewEpicrisisComponent.propTypes = {
}

export default OverviewEpicrisisComponent
