import { compose, mapProps } from 'recompose'
import { inject } from 'mobx-react'

import NavSidebar from './component'

export default compose(
	inject('applicationStateStore'),
	mapProps(({ applicationStateStore }) => ({
		user: applicationStateStore.loggedUser,
	}))
)(NavSidebar)
