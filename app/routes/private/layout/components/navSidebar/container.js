import { compose, withProps } from 'recompose'
import { inject } from 'mobx-react'

import NavSidebar from './component'

export default compose(
	inject('applicationStateStore'),
	withProps(({ applicationStateStore }) => ({
		user: applicationStateStore.loggedUser,
	}))
)(NavSidebar)
