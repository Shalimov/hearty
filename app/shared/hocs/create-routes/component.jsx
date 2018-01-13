import React from 'react'
import fp from 'lodash/fp'
import { getDisplayName, nest } from 'recompose'
import { Route, Redirect, Switch } from 'react-router-dom'

const { Fragment } = React
const KeyIsModalRoute = Symbol('Modal:Route')

const createRoutes = (routesFn, options) => {
	options = {
		switched: true,
		layout: null,
		...options,
	}

	const Layout = options.layout
	const Container = options.switched ? Switch : Fragment

	const GeneratedRoutes = params => {
		const allRoutes = routesFn(params)
		const [modalRoutes, restRoutes] = fp.partition(params => !!params[KeyIsModalRoute], allRoutes)

		const transformToRoute = params => {
			if (fp.has('redirect', params)) {
				return <Redirect {...params.redirect} key={`redirect_${params.to}`} />
			}

			return <Route {...params} key={params.path || getDisplayName(params.component)} />
		}
		
		return (
			<Fragment>
				<Container>
					{
						fp.map(transformToRoute, restRoutes)
					}
				</Container>
				{
					fp.map(transformToRoute, modalRoutes)
				}
			</Fragment>
		)
	}

	return fp.isFunction(Layout) ?
		nest(Layout, GeneratedRoutes) :
		GeneratedRoutes
}

export default createRoutes
export { KeyIsModalRoute }
